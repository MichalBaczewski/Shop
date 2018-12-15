import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {WarehouseModel} from "../model/warehouse.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ProductModel} from "../model/product.model";

@Injectable(
  {
    providedIn: 'root'
  })

export class WarehouseService {

  private warehousePositions: Array<WarehouseModel> = [];
  private warehousePositionsStream: Subject<Array<WarehouseModel>> = new Subject();

  constructor(private http: HttpClient){}

  public getWarehousePositions(): Observable<Array<WarehouseModel>> {
    return this.http.get("/api/warehouse").pipe(map((response: Array<WarehouseModel>) => {
      this.warehousePositions = response;
      this.warehousePositionsStream.next(this.warehousePositions);
      return this.warehousePositions;
    }));
  }

  public getWarehousePosition(id: number): Observable<WarehouseModel> {
    return this.http.get("/api/warehouse/" + id)
      .pipe(map((response: WarehouseModel) => {
      return response;
    }));
  }


  public removeWarehousePosition(id: number) {
    return this.http.delete("/api/warehouse/" + id);
  }

  public saveWarehousePosition(warehousePosition: WarehouseModel): Observable<WarehouseModel> {
    if (warehousePosition.id) {
      return this.http.put("/api/warehouse/" + warehousePosition.id, warehousePosition)
        .pipe(map((response: WarehouseModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/warehouse", warehousePosition)
        .pipe(map((response: WarehouseModel) => {
        return response;
      }));
    }
  }
}
