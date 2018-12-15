import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {WarehouseService} from "../service/warehouse.service";
import {ProductService} from "../service/product.service";

@Injectable()
export class WarehouseResolve implements Resolve<any> {

  constructor(private warehouseService: WarehouseService) {
  }

  resolve() {
    return this.warehouseService.getWarehousePositions();
  }
}

@Injectable()
export class WarehousePositionResolve implements Resolve<any> {

  constructor(private warehouseService: WarehouseService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.warehouseService.getWarehousePosition(route.params['id']);
  }
}
