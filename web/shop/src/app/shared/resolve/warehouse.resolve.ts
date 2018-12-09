import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {WarehouseService} from "../service/warehouse.service";

@Injectable()
export class WarehouseResolve implements Resolve<any> {

  constructor(private warehouseService: WarehouseService){

  }

  resolve(){
    return this.warehouseService.getProducts();
  }

}
