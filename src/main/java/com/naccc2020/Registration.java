package com.naccc2020;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Registration {
    private @Id
    @GeneratedValue
    Long id;
    private String firstName;
    private String lastName;
    private Date birthday;
    private String email;
    private String phone;
    private Boolean isWorkingMessenger;
    private String city;
    private String team;
    private String callsign;
    private String gender;
    private Boolean wtnb;
    private String pronouns;
    private Integer racerNumber;
    private Boolean needsHousing;
}
