import {Injectable} from "@angular/core";
import {WarehouseModel} from "../model/warehouse.model";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private positions: Array<WarehouseModel> = [];
  private positionsStream: Subject<Array<WarehouseModel>> = new Subject;

  constructor(private http: HttpClient) {
  }

  public getPositions(): Observable<Array<WarehouseModel>> {
    return this.http.get("/api/warehouse").pipe(map((response: Array<WarehouseModel>) => {
      this.positions = response;
      this.positionsStream.next(this.positions);
      return this.positions;
    }));
  }

  public getPosition(id: number): Observable<WarehouseModel> {
    return this.http.get("/api/warehouse/" + id).pipe(map((response: WarehouseModel) => {
      return response;
    }));
  }

  public removePosition(id: number) {
    return this.http.delete("/api/warehouse/" + id);
  }

  public savePosition(position: WarehouseModel): Observable<WarehouseModel> {
    if (position.id) {
      return this.http.put("/api/warehouse/" + position.id, position).pipe(map((response: WarehouseModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/warehouse", position).pipe(map((response: WarehouseModel) => {
        return response;
      }));
    }
  }

}
