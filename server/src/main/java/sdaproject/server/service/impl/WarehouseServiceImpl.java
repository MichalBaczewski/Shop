package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.WarehouseConverter;
import sdaproject.server.dto.WarehouseDTO;
import sdaproject.server.entity.WarehouseEntity;
import sdaproject.server.repository.WarehouseRepository;
import sdaproject.server.service.WarehouseService;


@Service
public class WarehouseServiceImpl extends AbstractServiceImpl<WarehouseEntity, WarehouseDTO>
        implements WarehouseService {

    private final WarehouseRepository warehouseRepository;
    private final WarehouseConverter warehouseConverter;

    public WarehouseServiceImpl(WarehouseRepository warehouseRepository,
                                WarehouseConverter warehouseConverter) {
        this.warehouseRepository = warehouseRepository;
        this.warehouseConverter = warehouseConverter;
    }

    @Override
    protected JpaRepository<WarehouseEntity, Long> getRepo() {
        return warehouseRepository;
    }

    @Override
    protected Converter<WarehouseEntity, WarehouseDTO> getConverter() {
        return warehouseConverter;
    }
}
