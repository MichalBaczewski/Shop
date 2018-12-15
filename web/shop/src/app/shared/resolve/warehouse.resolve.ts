import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {WarehouseService} from "../service/warehouse.service";

@Injectable()
export class WarehouseResolve implements Resolve<any> {

  constructor(private warehouseService: WarehouseService){

  }

  resolve(){
    return this.warehouseService.getPositions();
  }

}

@Injectable()
export class WarehousePositionResolve implements Resolve<any> {

  constructor(private warehouseService: WarehouseService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.warehouseService.getPosition(route.params['id']);
  }
}
