import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {WarehouseService} from "../../shared/service/warehouse.service";
import {WarehouseModel} from "../../shared/model/warehouse.model";
import {ProductModel} from "../../shared/model/product.model";

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
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
    if (this.route.snapshot.data['warehousePosition']) {
      this.warehousePosition = this.route.snapshot.data['warehousePosition'];
    }
  }

  savePosition() {
    this.warehouseService.savePosition(this.warehousePosition).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
