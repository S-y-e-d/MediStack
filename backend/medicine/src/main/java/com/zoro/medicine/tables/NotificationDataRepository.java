package com.zoro.medicine.tables;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface NotificationDataRepository extends JpaRepository<NotificationData, Long> {

    boolean existsByMedicine_MedicineIdAndType(Long medicineId, String type);
/*
    Spring will now understand:

    medicine → refers to the @ManyToOne field.

    MedicineId → refers to the actual @Id field inside InventoryData.

 */
    //boolean existsByMedicineIdAndType(Long medicineId, String type);
    boolean existsByMedicine_MedicineIdAndTypeAndSeenFalse(Long medicineId, String type);
    List<NotificationData> findBySeenFalse();
    List<NotificationData> findByTypeIgnoreCase(String type); //Support for filtering
}
