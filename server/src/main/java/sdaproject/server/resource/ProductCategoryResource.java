package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.ProductCategoryDTO;
import sdaproject.server.entity.ProductCategoryEntity;
import sdaproject.server.service.ProductCategoryService;

@RestController
@RequestMapping("/api/product-categories")
public class ProductCategoryResource extends AbstractResource<ProductCategoryEntity, ProductCategoryDTO> {

    private final Logger log = LoggerFactory.getLogger(ProductCategoryResource.class);

    private final ProductCategoryService productCategoryService;

    public ProductCategoryResource(ProductCategoryService productCategoryService) {
        this.productCategoryService = productCategoryService;
    }

    @Override
    public ProductCategoryService getService() {
        return productCategoryService;
    }

}
