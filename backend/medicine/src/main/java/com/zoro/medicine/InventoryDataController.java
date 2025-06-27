package com.zoro.medicine;

import com.zoro.medicine.tables.InventoryData;
import com.zoro.medicine.tables.InventoryDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventory")
public class InventoryDataController {

    @Autowired
    private InventoryDataRepository inventoryRepo;

    // Get all inventory items
    @GetMapping
    public List<InventoryData> getAllInventory() {
        return inventoryRepo.findAll();
    }

    // Get single item by ID
    @GetMapping("/{id}")
    public Optional<InventoryData> getInventoryById(@PathVariable Long id) {
        return inventoryRepo.findById(id);
    }

    // Add new inventory item
    @PostMapping
    public InventoryData createInventory(@RequestBody InventoryData data) {
        return inventoryRepo.save(data);
    }

    // Update inventory item
    @PutMapping("/{id}")
    public InventoryData updateInventory(@PathVariable Long id, @RequestBody InventoryData updatedData) {
        updatedData.setMedicineId(id);
        return inventoryRepo.save(updatedData);
    }

    // Delete item
    @DeleteMapping("/{id}")
    public void deleteInventory(@PathVariable Long id) {
        inventoryRepo.deleteById(id);
    }
}
