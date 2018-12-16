import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './layout/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import { ContentComponent } from './layout/content/content.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ProductCategoriesComponent } from './admin-panel/product-categories/product-categories.component';
import { ProductsComponent } from './admin-panel/products/products.component';
import { EditProductCategoryComponent } from './admin-panel/edit-product-category/edit-product-category.component';
import { EditProductComponent } from './admin-panel/edit-product/edit-product.component';
import { OrdersComponent } from './admin-panel/orders/orders.component';
import { WarehouseComponent } from './admin-panel/warehouse/warehouse.component';
import {ProductCategoryService} from "./shared/service/product-category.service";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";
import {ProductService} from "./shared/service/product.service";
import {ProductResolve, ProductsResolve} from "./shared/resolve/product.resolve";
import {WarehouseService} from "./shared/service/warehouse.service";
import {WarehousePositionResolve, WarehouseResolve} from "./shared/resolve/warehouse.resolve";
import { EditWarehousePositionComponent } from './admin-panel/edit-warehouse-position/edit-warehouse-position.component';
import { LoginComponent } from './login/login.component';
import {GuestGuard} from "./shared/guard/guest.guard";
import {LoginGuard} from "./shared/guard/login.guard";
import {AdminGuard} from "./shared/guard/admin.guard";
import {AuthService} from "./shared/service/auth.service";
import {AppService} from "./shared/service/app.service";
import { CartComponent } from './cart/cart.component';
import { NewOrderComponent } from './new-order/new-order.component';
import {CartService} from "./shared/service/cart.service";

@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    AdminPanelComponent,
    HomeComponent,
    ProductCategoriesComponent,
    ProductsComponent,
    EditProductCategoryComponent,
    EditProductComponent,
    OrdersComponent,
    WarehouseComponent,
    EditWarehousePositionComponent,
    LoginComponent,
    CartComponent,
    NewOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    ProductCategoryService,
    ProductCategoriesResolve,
    ProductCategoryResolve,
    ProductService,
    ProductsResolve,
    ProductResolve,
    WarehouseService,
    WarehouseResolve,
    WarehousePositionResolve,
    GuestGuard,
    LoginGuard,
    AdminGuard,
    AuthService,
    AppService,
    CartService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
