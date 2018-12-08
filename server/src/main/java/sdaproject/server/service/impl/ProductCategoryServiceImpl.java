package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.ProductCategoryDTO;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.ProductCategoryConverter;
import sdaproject.server.entity.ProductCategoryEntity;
import sdaproject.server.repository.ProductCategoryRepository;
import sdaproject.server.service.ProductCategoryService;

import java.util.List;

@Service
public class ProductCategoryServiceImpl extends AbstractServiceImpl<ProductCategoryEntity, ProductCategoryDTO> implements ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;
    private final ProductCategoryConverter productCategoryConverter;

    public ProductCategoryServiceImpl(ProductCategoryRepository productCategoryRepository, ProductCategoryConverter productCategoryConverter) {
        this.productCategoryRepository = productCategoryRepository;
        this.productCategoryConverter = productCategoryConverter;
    }

    @Override
    protected JpaRepository<ProductCategoryEntity, Long> getRepo() {
        return productCategoryRepository;
    }

    @Override
    protected Converter<ProductCategoryEntity, ProductCategoryDTO> getConverter() {
        return productCategoryConverter;
    }

    @Override
    public List<DictionaryDTO> getProductCategoriesDictionary() {
        return productCategoryRepository.getProductCategoriesDictionary();
    }
}
