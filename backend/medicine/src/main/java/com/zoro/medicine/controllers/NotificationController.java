package com.zoro.medicine.controllers;

import com.zoro.medicine.tables.NotificationData;
import com.zoro.medicine.tables.NotificationDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/notification")
public class NotificationController {

    @Autowired
    private NotificationDataRepository notificationRepo;

    // Get all notifications
    @GetMapping
    public List<NotificationData> getAllNotification(){return notificationRepo.findAll();};

    // Get single item by ID
    @GetMapping("{id}")
    public Optional<NotificationData> getNotificationById(@PathVariable Long id){
        return notificationRepo.findById(id);
    }

    @GetMapping("/type/{type}")
    public List<NotificationData> getByType(@PathVariable String type){
        return notificationRepo.findByTypeIgnoreCase(type);
    }






}
