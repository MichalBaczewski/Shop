import {WarehouseModel} from "./warehouse.model";

export class CartItemModel {
  quantity: number = 0;
  warehouseItem: WarehouseModel = new WarehouseModel();

  public constructor(warehouseItem: WarehouseModel, quantity: number) {
    this.quantity = quantity;
    this.warehouseItem = warehouseItem;
  }

}
