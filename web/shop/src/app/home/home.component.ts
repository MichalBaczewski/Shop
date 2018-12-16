import { Component, OnInit } from '@angular/core';
import {WarehouseModel} from "../shared/model/warehouse.model";
import {ActivatedRoute} from "@angular/router";
import {CartItemModel} from "../shared/model/card-item.model";
import {CartService} from "../shared/service/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<WarehouseModel> = [];
  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit() {
    if (this.route.snapshot.data['items']) {
      this.items = this.route.snapshot.data['items'];
    }
  }

  addToCart(item: WarehouseModel) {
    let shoppingCartItem = new CartItemModel(item, 1);
    this.cartService.addItem(shoppingCartItem);
  }

  isInCart(warehouseId: number): boolean {
    return this.cartService.containsItem(warehouseId);
  }

}
