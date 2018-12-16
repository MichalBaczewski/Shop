import {Component, OnInit} from "@angular/core";
import {CartModel} from "../shared/model/cart.model";
import {UserModel} from "../shared/model/user.model";
import {CartService} from "../shared/service/cart.service";
import {AppService} from "../shared/service/app.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  cart: CartModel = new CartModel();
  user: UserModel = new UserModel();

  constructor(private location: Location,
              private cartService: CartService,
              private appService: AppService) { }

  ngOnInit() {
    this.cartService.getCartStream().subscribe((cart: CartModel) => {
      this.cart = cart;
    });

    this.appService.getLoggedUserStream().subscribe((user: UserModel) => {
      this.user = user;
    });
  }

  cartSummary(): number {
    return this.cartService.summary();
  }

  back() {
    this.location.back();
  }

}
