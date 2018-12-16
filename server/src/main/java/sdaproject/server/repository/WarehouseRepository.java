package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.entity.WarehouseEntity;

import java.util.List;

@Repository
public interface WarehouseRepository extends JpaRepository<WarehouseEntity, Long> {

    @Query("SELECT new sdaproject.server.dto.DictionaryDTO(id, product.name) FROM WarehouseEntity")
    List<DictionaryDTO> getWarehouseDictionary();

}
