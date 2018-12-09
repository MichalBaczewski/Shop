import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {ProductService} from "../../shared/service/product.service";
import {ActivatedRoute} from "@angular/router";
import {ProductCategoryModel} from "../../shared/model/product-category.model";
import {Location} from "@angular/common";


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: ProductModel  = new ProductModel();
  productCategories: Array<ProductCategoryModel> = [];

  constructor(private productService: ProductService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['product']) {
      this.product = this.route.snapshot.data['product'];
    }
    this.productCategories = this.route.snapshot.data['productCategories']
  }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
