package com.zoro.medicine.tables;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "sales_data")
public class SalesData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long saleId;

    @ManyToOne
    @JoinColumn(name = "medicine_id", nullable = false)
    private InventoryData medicine;

    private int quantitySold;
    private LocalDate saleDate;
    private double sellingPrice;
    private String customerType;

    // Getters and setters
}

