package com.zoro.medicine.bootstrap;

import com.zoro.medicine.tables.InventoryData;
import com.zoro.medicine.tables.InventoryDataRepository;
import com.zoro.medicine.tables.SalesData;
import com.zoro.medicine.tables.SalesDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Profile("dev") // only run this when this profile is acitve
@Component
public class SampleDataLoader implements CommandLineRunner {

    @Autowired
    private InventoryDataRepository inventoryRepo;

    @Autowired
    private SalesDataRepository salesRepo;

    @Override
    public void run(String... args) {
        InventoryData med1 = createMedicine("Paracetamol", "Tablet", "ABC Pharma", "B001", 10, 20, 5.0, 3.0, 6, 2025, "Rack 1", "Supplier A");
        InventoryData med2 = createMedicine("Cough Syrup", "Syrup", "XYZ Labs", "B002", 3, 5, 50.0, 40.0, 2, 2024, "Rack 2", "Supplier B");
        InventoryData med3 = createMedicine("Painkiller", "Capsule", "MediCare", "B003", 30, 10, 10.0, 7.0, -2, 2025, "Rack 3", "Supplier C");

        inventoryRepo.saveAll(List.of(med1, med2, med3));

        // Simulate some sales
        salesRepo.saveAll(List.of(
                createSale(med1, 5, LocalDate.now().minusDays(5), 6.0, "REGULAR"),
                createSale(med1, 3, LocalDate.now().minusMonths(3), 6.0, "REGULAR"),
                createSale(med3, 10, LocalDate.now().minusMonths(6), 12.0, "RETAIL")
        ));
    }

    private InventoryData createMedicine(String name, String category, String manufacturer,
                                         String batch, int qty, int reorder, double unitPrice,
                                         double purchasePrice, int monthsToExpire, int expireYear,
                                         String location, String supplier) {

        InventoryData m = new InventoryData();
        m.setName(name);
        m.setCategory(category);
        m.setManufacturer(manufacturer);
        m.setBatchNumber(batch);
        m.setQuantityInStock(qty);
        m.setReorderLevel(reorder);
        m.setUnitPrice(unitPrice);
        m.setPurchasePrice(purchasePrice);
        m.setPurchaseDate(LocalDate.now().minusMonths(1));
        m.setExpirationDate(LocalDate.now().plusMonths(monthsToExpire));
        m.setStorageLocation(location);
        m.setSupplierInfo(supplier);
        m.setStatus("");
        m.setLastNotified(null);
        return m;
    }

    private SalesData createSale(InventoryData med, int qty, LocalDate date, double price, String type) {
        SalesData s = new SalesData();
        s.setMedicine(med);
        s.setQuantitySold(qty);
        s.setSaleDate(date);
        s.setSellingPrice(price);
        s.setCustomerType(type);
        return s;
    }
}
