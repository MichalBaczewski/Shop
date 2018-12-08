import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ProductCategoryService} from "../service/product-category.service";

@Injectable()
export class ProductCategoriesResolve implements Resolve<any> {

  constructor(private productCategoryService: ProductCategoryService) {}

  resolve() {
    return this.productCategoryService.getProductCategories();
  }
}

@Injectable()
export class ProductCategoryResolve implements Resolve<any> {

  constructor(private productCategoryService: ProductCategoryService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.productCategoryService.getProductCategory(route.params['id']);
  }
}
