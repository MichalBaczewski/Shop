import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {ProductsComponent} from "./admin-panel/products/products.component";
import {ProductCategoriesComponent} from "./admin-panel/product-categories/product-categories.component";
import {EditProductCategoryComponent} from "./admin-panel/edit-product-category/edit-product-category.component";
import {EditProductComponent} from "./admin-panel/edit-product/edit-product.component";
import {OrdersComponent} from "./admin-panel/orders/orders.component";
import {WarehouseComponent} from "./admin-panel/warehouse/warehouse.component";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";
import {ProductResolve, ProductsResolve} from "./shared/resolve/product.resolve";
import {WarehousePositionResolve, WarehouseResolve} from "./shared/resolve/warehouse.resolve";
import {EditWarehousePositionComponent} from "./admin-panel/edit-warehouse-position/edit-warehouse-position.component";
import {LoginComponent} from "./login/login.component";
import {GuestGuard} from "./shared/guard/guest.guard";
import {CartComponent} from "./cart/cart.component";
import {NewOrderComponent} from "./new-order/new-order.component";
import {LoginGuard} from "./shared/guard/login.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      items: WarehouseResolve
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'new-order',
    component: NewOrderComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'prefix'
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'warehouse',
        component: WarehouseComponent,
        resolve: {
          positions: WarehouseResolve
        }
      },
      {
        path: 'warehouse/add',
        component: EditWarehousePositionComponent,
        resolve: {
          products: ProductsResolve,
          // productCategories: ProductCategoriesResolve
        }
      },
      {
        path: 'warehouse/edit/:id',
        component: EditWarehousePositionComponent,
        resolve: {
          products: ProductsResolve,
          warehousePosition: WarehousePositionResolve,
          // productCategories: ProductCategoriesResolve
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        resolve: {
          products: ProductsResolve
        }
      },
      {
        path: 'products/add',
        component: EditProductComponent,
        resolve: {
          productCategories: ProductCategoriesResolve
        }
      },

      {
        path: 'products/edit/:id',
        component: EditProductComponent,
        resolve: {
          product: ProductResolve,
          productCategories: ProductCategoriesResolve
        }
      },
      {
        path: 'product-categories',
        component: ProductCategoriesComponent,
        resolve: {
          productCategories: ProductCategoriesResolve
        }
      },
      {
        path: 'product-categories/add',
        component: EditProductCategoryComponent
      },
      {
        path: 'product-categories/edit/:id',
        component: EditProductCategoryComponent,
        resolve: {
          productCategory: ProductCategoryResolve
        }
      },
      {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'prefix'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
