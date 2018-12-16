import {CartItemModel} from "./card-item.model";

export class CartModel {
  items: Array<CartItemModel> = [];

  public initCart(cart: CartModel) {
    this.items = cart.items;
  }

  public clearCart() {
    this.items = [];
  }

  public addItem(newItem: CartItemModel) {
    this.items.push(newItem);
  }

  public summary(): number {
    return this.items.map(item => item.warehouseItem.price * item.quantity).reduce((item1, item2) => item1 + item2, 0);
  }

  public removeItem(warehouseId: number) {
    let index = this.items.map(item => item.warehouseItem.id).indexOf(warehouseId);
    if (index !== null) {
      this.items.splice(index, 1);
    }
  }

  public containsItem(warehouseItemId: number): boolean {
    return this.items.filter(item => item.warehouseItem.id == warehouseItemId).length > 0;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

}
