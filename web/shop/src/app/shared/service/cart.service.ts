import {Injectable} from "@angular/core";
import {CartModel} from "../model/cart.model";
import {Observable, Subject} from "rxjs";
import {CartItemModel} from "../model/card-item.model";
import {startWith} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartModel = new CartModel();
  private cartStream: Subject<CartModel> = new Subject();

  constructor() { }

  public addItem(newItem: CartItemModel) {
    this.cart.addItem(newItem);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartStream.next(this.cart);
  }

  public removeItem(warehouseId: number) {
    this.cart.removeItem(warehouseId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartStream.next(this.cart);
  }

  public containsItem(warehouseId: number): boolean {
    return this.cart.containsItem(warehouseId);
  }

  public getCartStream(): Observable<CartModel> {
    return this.cartStream.asObservable().pipe(startWith(this.cart));
  }

  public updateCart(cart: CartModel) {
    this.cart.initCart(cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartStream.next(this.cart);
  }

  public clearCart() {
    this.cart.clearCart();
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartStream.next(this.cart);
  }

  public summary(): number {
    return this.cart.summary();
  }

  public isEmpty(): boolean {
    return this.cart.isEmpty();
  }

  public getCartInfo() {
    let tempCart = localStorage.getItem('cart');
    if (tempCart) {
      this.cart.initCart(JSON.parse(tempCart));
      this.cartStream.next(this.cart);
    }
  }

}
