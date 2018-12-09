import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {ProductCategoryModel} from "../../shared/model/product-category.model";
import {ProductService} from "../../shared/service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products']
  }

  removeProduct(productId: number, index: number) {
    this.productService.removeProduct(productId).subscribe(() => {
      this.products.splice(index, 1);
    });
  }
}
