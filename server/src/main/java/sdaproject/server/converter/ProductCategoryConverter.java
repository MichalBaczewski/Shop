package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.ProductCategoryDTO;
import sdaproject.server.entity.ProductCategoryEntity;

@Component
public class ProductCategoryConverter implements Converter<ProductCategoryEntity, ProductCategoryDTO> {

    @Override
    public ProductCategoryEntity convertToEntity(ProductCategoryDTO dto) {
        ProductCategoryEntity entity = new ProductCategoryEntity();

        entity.setId(dto.getId());
        entity.setName(dto.getName());

        return entity;
    }

    @Override
    public ProductCategoryDTO convertToDto(ProductCategoryEntity entity) {
        ProductCategoryDTO dto = new ProductCategoryDTO();

        dto.setId(entity.getId());
        dto.setName(entity.getName());

        return dto;
    }
}
