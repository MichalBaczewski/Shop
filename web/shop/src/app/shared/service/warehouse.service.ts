import {Injectable} from "@angular/core";
import {WarehouseModel} from "../model/warehouse.model";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private products: Array<WarehouseModel> = [];
  private productsStream: Subject<Array<WarehouseModel>> = new Subject;

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Array<WarehouseModel>> {
    return this.http.get("/api/warehouse").pipe(map((response: Array<WarehouseModel>) => {
      this.products = response;
      this.productsStream.next(this.products);
      return this.products;
    }));
  }
}
