package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.WarehouseConverter;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.WarehouseDTO;
import sdaproject.server.entity.WarehouseEntity;
import sdaproject.server.repository.WarehouseRepository;
import sdaproject.server.service.WarehouseService;

import java.util.List;

@Service
public class WarehouseServiceImp extends AbstractServiceImpl<WarehouseEntity, WarehouseDTO> implements WarehouseService {

    private final WarehouseConverter warehouseConverter;
    private final WarehouseRepository warehouseRepository;

    public WarehouseServiceImp(WarehouseConverter warehouseConverter, WarehouseRepository warehouseRepository) {
        this.warehouseConverter = warehouseConverter;
        this.warehouseRepository = warehouseRepository;
    }

    @Override
    protected JpaRepository<WarehouseEntity, Long> getRepo() {
        return warehouseRepository;
    }

    @Override
    protected Converter<WarehouseEntity, WarehouseDTO> getConverter() {
        return warehouseConverter;
    }

//    @Override
//    public List<DictionaryDTO> getWarehouseDictionary() {
//        return warehouseRepository.getWarehouseDictionary();
//    }
}
