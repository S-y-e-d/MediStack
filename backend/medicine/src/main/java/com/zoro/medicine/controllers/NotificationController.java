package com.zoro.medicine.controllers;

import com.zoro.medicine.services.NotificationService;
import com.zoro.medicine.tables.NotificationData;
import com.zoro.medicine.tables.NotificationDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private NotificationDataRepository notificationRepo;

    @GetMapping("/generate")
    public ResponseEntity<String> triggerNotificationScan(){
        notificationService.generateNotifications();
        return ResponseEntity.ok("Notifications checked.");
    }

    @GetMapping("/api/notification/generate")
    public ResponseEntity<String> triggerNotifications() {
        notificationService.generateNotifications();
        return ResponseEntity.ok("Notification generation triggered.");
    }



    @GetMapping("api/notification/unseen")
    public List<NotificationData> getUnseenNotifications(){
        return notificationRepo.findBySeenFalse();
    }

    @PostMapping("/mark-seen/{id}")
    public ResponseEntity<Void> markSeen(@PathVariable Long id){
        Optional<NotificationData> n = notificationRepo.findById(id);
        n.ifPresent(
                notif -> {
                    notif.setSeen(true);
                    notificationRepo.save(notif);
                }
        );
        return ResponseEntity.ok().build();
    }

    // Get all notifications
    @GetMapping
    public List<NotificationData> getAllNotification(){return notificationRepo.findAll();};

    // Get a single item by ID
    @GetMapping("{id}")
    public Optional<NotificationData> getNotificationById(@PathVariable Long id){
        return notificationRepo.findById(id);
    }

    @GetMapping("/type/{type}")
    public List<NotificationData> getByType(@PathVariable String type){
        return notificationRepo.findByTypeIgnoreCase(type);
    }






}
