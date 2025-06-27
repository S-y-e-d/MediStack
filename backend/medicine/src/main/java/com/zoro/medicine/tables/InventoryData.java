package com.zoro.medicine.tables;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "inventory_data")
public class InventoryData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long medicineId;

    private String name;
    private String category;
    private String manufacturer;
    private String batchNumber;

    private int quantityInStock;
    private int reorderLevel;

    private double unitPrice;
    private double purchasePrice;

    private LocalDate purchaseDate;
    private LocalDate expirationDate;

    private String storageLocation;
    private String supplierInfo;

    private String status;           // "Low Stock", "Expired", etc.
    private LocalDate lastNotified;

}
