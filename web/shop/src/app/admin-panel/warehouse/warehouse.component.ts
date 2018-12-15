import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WarehouseModel} from "../../shared/model/warehouse.model";
import {WarehouseService} from "../../shared/service/warehouse.service";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {


  warehousePositions: Array<WarehouseModel> = [];

  constructor(private warehouseService: WarehouseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.warehousePositions = this.route.snapshot.data['warehouse']
  }

  removeWarehousePosition(positionId: number, index: number) {
    this.warehouseService.removeWarehousePosition(positionId).subscribe(() => {
      this.warehousePositions.splice(index, 1);
    });
  }

}
