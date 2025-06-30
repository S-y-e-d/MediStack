package com.zoro.medicine.tables;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "medicine_notification")

public class NotificationData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message; //"Low stock", "Expiring soon", "Not selling"
    private String type; // ENUM: LOW_STOCK, EXPIRED, UNSOLD, etc.

    private boolean seen = false; // mark if shown in frontend

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "medicine_id", referencedColumnName = "medicine_id")
    private InventoryData medicine;

}
