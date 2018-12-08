package sdaproject.server.service;

import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.ProductCategoryDTO;
import sdaproject.server.entity.ProductCategoryEntity;

import java.util.List;

public interface ProductCategoryService extends AbstractService<ProductCategoryEntity, ProductCategoryDTO> {

    List<DictionaryDTO> getProductCategoriesDictionary();

}
