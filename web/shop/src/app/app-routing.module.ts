import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {ProductsComponent} from "./admin-panel/products/products.component";
import {ProductCategoriesComponent} from "./admin-panel/product-categories/product-categories.component";
import {EditProductCategoryComponent} from "./admin-panel/edit-product-category/edit-product-category.component";
import {EditProductComponent} from "./admin-panel/edit-product/edit-product.component";
import {OrdersComponent} from "./admin-panel/orders/orders.component";
import {WarehouseComponent} from "./admin-panel/warehouse/warehouse.component";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
        component: WarehouseComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/add',
        component: EditProductComponent
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
