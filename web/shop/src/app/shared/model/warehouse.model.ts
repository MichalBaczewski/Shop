import {ProductModel} from "./product.model";

export class WarehouseModel {

  id: number = null;
  quantity: number = null;
  price: number = null;
  product: ProductModel = new ProductModel();

}
