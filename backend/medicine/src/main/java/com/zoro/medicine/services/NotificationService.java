package com.zoro.medicine.services;

import com.zoro.medicine.tables.InventoryData;
import com.zoro.medicine.tables.InventoryDataRepository;
import com.zoro.medicine.tables.NotificationData;
import com.zoro.medicine.tables.NotificationDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationDataRepository notificationRepo;

    @Autowired
    private InventoryDataRepository inventoryRepo;

    public void checkAndCreateLowStockNotifications() {
        List<InventoryData> allItems = inventoryRepo.findAll();

        for (InventoryData inventory : allItems) {
            if (inventory.getQuantityInStock() <= inventory.getReorderLevel()) {
                boolean exists = notificationRepo.existsByMedicineIdAndType(
                        inventory.getMedicineId(), "LOW_STOCK"
                );

                if (!exists) {
                    NotificationData notification = new NotificationData();
                    notification.setMedicineId(inventory.getMedicineId());
                    notification.setType("LOW_STOCK");
                    notification.setMessage("Low stock alert for " + inventory.getName());
                    notification.setCreatedAt(LocalDateTime.now());
                    notificationRepo.save(notification);
                }
            }
        }
    }
}
