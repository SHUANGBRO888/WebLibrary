package com.GeziPro.springbootlibrary.controller;

import com.GeziPro.springbootlibrary.entity.Message;
import com.GeziPro.springbootlibrary.requestmodels.AdminQuestionRequest;
import com.GeziPro.springbootlibrary.service.MessageService;
import com.GeziPro.springbootlibrary.utils.ExtractJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/secure/add/message")
    public void addMessage(@RequestHeader(value = "Authorization") String token,
                                    @RequestBody Message messageRequest) throws Exception{
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
        messageService.postMessage(messageRequest, userEmail);
    }

    @PutMapping("/secure/admin/message")
    public void putMessage(@RequestHeader(value = "Authorization") String token,
                           @RequestBody AdminQuestionRequest adminQuestionRequest) throws Exception{
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
        String admin = ExtractJWT.payloadJWTExtraction(token, "\"userType\"");

        // whether it is admin
        if(admin == null || !admin.equals("admin")){
            throw new Exception("It's not admin");
        }
        messageService.putMessage(adminQuestionRequest, userEmail);
    }

}
