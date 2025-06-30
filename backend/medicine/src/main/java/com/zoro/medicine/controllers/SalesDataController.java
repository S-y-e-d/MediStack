package com.zoro.medicine.controllers;

import com.zoro.medicine.tables.SalesData;
import com.zoro.medicine.tables.SalesDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/sales")
public class SalesDataController {

    @Autowired
    private SalesDataRepository salesRepo;

    // Get all sales
    @GetMapping
    public List<SalesData> getAllSales() {
        return salesRepo.findAll();
    }

    // Get sale by ID
    @GetMapping("/{id}")
    public Optional<SalesData> getSaleById(@PathVariable Long id) {
        return salesRepo.findById(id);
    }

    // Add new sale
    @PostMapping
    public SalesData createSale(@RequestBody SalesData sale) {
        return salesRepo.save(sale);
    }

    // Update sale
    @PutMapping("/{id}")
    public SalesData updateSale(@PathVariable Long id, @RequestBody SalesData updatedSale) {
        updatedSale.setSaleId(id);
        return salesRepo.save(updatedSale);
    }

    // Delete sale
    @DeleteMapping("/{id}")
    public void deleteSale(@PathVariable Long id) {
        salesRepo.deleteById(id);
    }
}

