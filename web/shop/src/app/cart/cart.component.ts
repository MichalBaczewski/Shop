import { Component, OnInit } from '@angular/core';
import {CartModel} from "../shared/model/cart.model";
import {CartService} from "../shared/service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartModel = new CartModel();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartStream().subscribe((cart: CartModel) => {
      this.cart = cart;
    });
  }
  isEmptyCart(): boolean {
    return this.cartService.isEmpty();
  }

  updateCart() {
    this.cartService.updateCart(this.cart);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  cartSummary(): number {
    return this.cartService.summary();
  }

  removeFromCart(warehouseItemId: number) {
    console.log(warehouseItemId);
    this.cartService.removeItem(warehouseItemId);
  }


}
