package sdaproject.server.service;

import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;

import java.util.List;

public interface ProductService extends AbstractService<ProductEntity, ProductDTO> {

    List<DictionaryDTO> getProductDictionary();

}
