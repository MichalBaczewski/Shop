import {ProductCategoryModel} from "./product-category.model";

export class ProductModel {
  id: number = null;
  name: string = null;
  description: string = null;
  price: number = null;
  category: ProductCategoryModel = new ProductCategoryModel();
}
