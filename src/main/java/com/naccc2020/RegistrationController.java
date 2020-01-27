package com.naccc2020;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/registrations")
public class RegistrationController {
    private final RegistrationRepository registrationRepository;

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
    public Registration submit(@RequestBody Registration registration) {
        return registrationRepository.save(registration);
    }
}
