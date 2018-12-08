package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.entity.ProductEntity;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

    @Query("SELECT new sdaproject.server.dto.DictionaryDTO(id, name) FROM ProductEntity")
    List<DictionaryDTO> getProductDictionary();

}
