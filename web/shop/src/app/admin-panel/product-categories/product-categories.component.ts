import { Component, OnInit } from '@angular/core';
import {ProductCategoryModel} from "../../shared/model/product-category.model";
import {ProductCategoryService} from "../../shared/service/product-category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  productCategories: Array<ProductCategoryModel> = [];

  constructor(private productCategoryService: ProductCategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productCategories = this.route.snapshot.data['productCategories'];
  }

  removeProductCategory(categoryId: number, index: number) {
    this.productCategoryService.removeProductCategory(categoryId).subscribe(() => {
      this.productCategories.splice(index, 1);
    });
  }

}
