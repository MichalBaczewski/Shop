package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sdaproject.server.entity.WarehouseEntity;

public interface WarehouseRepository extends JpaRepository<WarehouseEntity,Long> {
}
