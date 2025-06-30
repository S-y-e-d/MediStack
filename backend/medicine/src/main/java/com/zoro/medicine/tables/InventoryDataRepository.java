package com.zoro.medicine.tables;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryDataRepository extends JpaRepository<InventoryData, Long> {
    InventoryData findByMedicineId(Long medicineId);
    boolean existsByMedicineIdAndStatus(Long medicineId, String status);
}
