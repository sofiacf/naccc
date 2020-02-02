package com.naccc2020;

import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.ValueRange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collections;

@Controller
@RequestMapping("/registrations")
public class RegistrationController {
    private static Sheets sheetsService;

    static {
        try {
            sheetsService = SheetsServiceUtil.getSheetsService();
        } catch (IOException | GeneralSecurityException e) {
            System.out.println("fyi setting up the sheets service failed");
            e.printStackTrace();
        }
    }

    private final RegistrationRepository registrationRepository;
    @Value("${SPREADSHEET_ID}")
    private String spreadsheetId;

    @Autowired
    public RegistrationController(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @GetMapping("/")
    @ResponseBody
    public String get() {
        return registrationRepository.findAll().toString();
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Registration submit(@RequestBody Registration registration) throws IOException {
        Registration savedRegistration = registrationRepository.save(registration);
        ValueRange body = new ValueRange()
                .setValues(Collections.singletonList(
                        Arrays.asList(registration.getId(), registration.getFirstName(), registration.getLastName(),
                                registration.getBirthdate(), registration.getPhone(), registration.getEmail(),
                                registration.getIsWorkingMessenger(), registration.getCity(), registration.getTeam(),
                                registration.getCallsign(), registration.getGender(), registration.getWtnb(),
                                registration.getPronouns(), registration.getRacerNumber(), registration.getNeedsHousing(),
                                registration.getShirtSize(), registration.getEmergencyContactName(), registration.getEmergencyContactPhone())));

        sheetsService.spreadsheets()
                .values()
                .append(spreadsheetId, "A1", body)
                .setValueInputOption("RAW")
                .execute();
        return savedRegistration;
    }
}
