package com.zoro.medicine.services;

import com.zoro.medicine.tables.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationDataRepository notificationRepo;

    @Autowired
    private InventoryDataRepository inventoryRepo;

    @Autowired
    private SalesDataRepository salesRepo;

    @Scheduled(cron = "0 0 * * * *") // every hour
    public void generateNotifications(){
        checkLowStock();
        checkExpiringSoon();
        checkNotSelling();
    }

    private void checkNotSelling(){
        LocalDate now = LocalDate.now();
        List<InventoryData> allMedicine = inventoryRepo.findAll();

        for(InventoryData m : allMedicine){
            boolean soldBefore = salesRepo.existsByMedicine(m);
            LocalDate lastSale = salesRepo.findLastSaleDate(m.getMedicineId());

            if(soldBefore && lastSale != null && lastSale.isBefore(now.minusMonths(2))){
                saveNotification(m.getMedicineId(), "Not selling recently", "NOT_SELLING");
            }
        }
    }
    private void checkExpiringSoon(){
        LocalDate thresholdDate = LocalDate.now().plusMonths(3);
        List<InventoryData> expiring = inventoryRepo.findAll().stream().filter(
          m -> m.getExpirationDate() != null &&
                  m.getExpirationDate().isBefore(thresholdDate) &&
                  m.getQuantityInStock() > 0
        ).toList();

        for( InventoryData m : expiring){
            saveNotification(m.getMedicineId(), "Expiring soon", "EXPIRING_SOON");
        }
    }

    private void saveNotification(Long medicineId, String msg, String type) {
        boolean exists = notificationRepo.existsByMedicine_MedicineIdAndType(medicineId, type);
        if(!exists){
            NotificationData notif = new NotificationData();
//            notif.getMedicine().setMedicineId(medicineId);
            notif.setMedicine(inventoryRepo.findByMedicineId(medicineId));
            notif.setMessage(msg);
            notif.setType(type);
            notif.setSeen(false);
            notif.setCreatedAt(LocalDateTime.now());
            notificationRepo.save(notif);
        }

    }

    public void checkLowStock() {
        List<InventoryData> allItems = inventoryRepo.findAll();

        for (InventoryData inventory : allItems) {
            if (inventory.getQuantityInStock() <= inventory.getReorderLevel()) {
                boolean exists = notificationRepo.existsByMedicine_MedicineIdAndType(
                        inventory.getMedicineId(), "LOW_STOCK"
                );

                if (!exists) {
                    NotificationData notification = new NotificationData();
                    notification.setMedicine(inventory);
                    notification.setType("LOW_STOCK");
                    notification.setMessage("Low stock alert for " + inventory.getName());
                    notification.setCreatedAt(LocalDateTime.now());
                    notificationRepo.save(notification);
                }
            }
        }
    }
}
