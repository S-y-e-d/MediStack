package com.zoro.medicine.tables;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;

public interface SalesDataRepository extends JpaRepository<SalesData, Long> {


    boolean existsByMedicine(InventoryData medicine);


    @Query("SELECT MAX(s.saleDate) FROM SalesData s WHERE s.medicine.medicineId = :medicineId")
    LocalDate findLastSaleDate(@Param("medicineId") Long medicineId);
}
