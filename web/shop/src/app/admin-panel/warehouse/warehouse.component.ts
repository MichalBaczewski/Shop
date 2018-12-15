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

  positions:Array<WarehouseModel> = [];

  constructor(private warehouseService: WarehouseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.positions= this.route.snapshot.data['positions'];
  }

  removePosition(positionId: number, index: number) {
    this.warehouseService.removePosition(positionId).subscribe(() => {
      this.positions.splice(index, 1);
    });
  }

}
