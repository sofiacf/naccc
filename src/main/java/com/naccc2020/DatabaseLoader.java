package com.naccc2020;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DatabaseLoader {
    private final RegistrationRepository registrationRepository;

    @Autowired
    public DatabaseLoader(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    public void load() {
        this.registrationRepository.save(new Registration(1L, "Sofia", "Chandler-Freed", new Date(), "sofia@naccc2020" +
                ".com", "510-646-2124", false, "Boston", "Right Coast Courier", "", "nonbinary", true, "they/she",
                124, false));
    }
}
