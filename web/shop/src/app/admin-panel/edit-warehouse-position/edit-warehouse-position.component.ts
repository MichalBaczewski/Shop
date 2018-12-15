import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {ProductCategoryModel} from "../../shared/model/product-category.model";
import {ProductService} from "../../shared/service/product.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {WarehouseModel} from "../../shared/model/warehouse.model";
import {WarehouseService} from "../../shared/service/warehouse.service";

@Component({
  selector: 'app-edit-warehouse-position',
  templateUrl: './edit-warehouse-position.component.html',
  styleUrls: ['./edit-warehouse-position.component.css']
})
export class EditWarehousePositionComponent implements OnInit {

  warehousePosition: WarehouseModel = new WarehouseModel();
  products: Array<ProductModel> = [];

  constructor(private warehouseService: WarehouseService,
              private location: Location,
              private route: ActivatedRoute) { }

  constructor() { }

  ngOnInit() {
    this.products = this.route.snapshot.data["products"];
    if (this.route.snapshot.data["warehousePosition"]) {
      this.warehousePosition = this.route.snapshot.data["warehousePosition"]
    }
  }


  saveWarehousePosition() {
    this.warehouseService.saveWarehousePosition(this.warehousePosition).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
