package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.ProductConverter;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;
import sdaproject.server.repository.ProductRepository;
import sdaproject.server.service.ProductService;

import java.util.List;

@Service
public class ProductServiceImpl extends AbstractServiceImpl<ProductEntity, ProductDTO> implements ProductService {

    private final ProductRepository productRepository;
    private final ProductConverter productConverter;

    public ProductServiceImpl(ProductRepository productRepository, ProductConverter productConverter) {
        this.productRepository = productRepository;
        this.productConverter = productConverter;
    }


    @Override
    public List<DictionaryDTO> getProductDictionary() {
        return productRepository.getProductDictionary();
    }

    @Override
    protected JpaRepository<ProductEntity, Long> getRepo() {
        return productRepository;
    }

    @Override
    protected Converter<ProductEntity, ProductDTO> getConverter() {
        return productConverter;
    }
}
