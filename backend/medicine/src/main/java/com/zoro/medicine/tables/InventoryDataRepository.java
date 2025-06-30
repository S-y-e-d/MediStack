package com.zoro.medicine.tables;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryDataRepository extends JpaRepository<InventoryData, Long> {

    boolean existsByMedicineIdAndType(Long medicineId, String type);
}
