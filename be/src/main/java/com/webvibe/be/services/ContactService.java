package com.webvibe.be.services;
import com.webvibe.be.dto.request.ContactRequest;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class ContactService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactEmail(ContactRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo("youremail@gmail.com");
        helper.setSubject("Liên hệ mới từ " + request.getName());

        String content = String.format(
                "<p><b>Họ tên:</b> %s</p>" +
                        "<p><b>Email:</b> %s</p>" +
                        "<p><b>Số điện thoại:</b> %s</p>" +
                        "<p><b>Chi nhánh:</b> %s</p>" +
                        "<p><b>Nội dung:</b><br>%s</p>",
                request.getName(), request.getEmail(), request.getPhone(),
                request.getBranch(), request.getMessage()
        );

        helper.setText(content, true);
        helper.setFrom(request.getEmail());

        mailSender.send(message);
    }
}