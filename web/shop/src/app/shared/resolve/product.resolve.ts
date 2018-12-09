import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ProductService} from "../service/product.service";

@Injectable()
export class ProductsResolve implements Resolve<any> {

  constructor(private productService: ProductService) {}

  resolve() {
    return this.productService.getProducts();
  }
}

@Injectable()
export class ProductResolve implements Resolve<any> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.productService.getProduct(route.params['id']);
  }
}
