package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.WarehouseDTO;
import sdaproject.server.entity.WarehouseEntity;
import sdaproject.server.service.AbstractService;
import sdaproject.server.service.ProductService;
import sdaproject.server.service.WarehouseService;

@RestController
@RequestMapping("/api/warehouse")
public class WarehouseResource extends AbstractResource<WarehouseEntity, WarehouseDTO> {

    private final Logger log = LoggerFactory.getLogger(WarehouseResource.class);

    private final WarehouseService warehouseService;

    public WarehouseResource(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }

    @Override
    public WarehouseService getService() {
        return warehouseService;
    }
}
