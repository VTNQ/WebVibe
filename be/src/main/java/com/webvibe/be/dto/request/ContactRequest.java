package com.webvibe.be.dto.request;

import lombok.*;

@Data
public class ContactRequest {
    private String name;
    private String email;
    private String phone;
    private String branch;
    private String message;

}
