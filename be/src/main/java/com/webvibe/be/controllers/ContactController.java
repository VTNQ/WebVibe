package com.webvibe.be.controllers;

import com.webvibe.be.dto.request.ContactRequest;
import com.webvibe.be.services.ContactService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public String handleContact(@RequestBody ContactRequest request) {
        try {
            contactService.sendContactEmail(request);
            return "Gửi email thành công!";
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Gửi email thất bại!";
        }
    }
}