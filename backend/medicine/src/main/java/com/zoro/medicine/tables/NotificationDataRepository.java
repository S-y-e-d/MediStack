package com.zoro.medicine.tables;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationDataRepository extends JpaRepository<NotificationData, Long> {
    boolean existsByMedicineIdAndType(Long medicineId, String lowStock);

    List<NotificationData> findByTypeIgnoreCase(String type); //Support for filtering
}
