import {Injectable} from "@angular/core";
import {ProductModel} from "../model/product.model";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<ProductModel> = [];
  private productsStream: Subject<Array<ProductModel>> = new Subject();

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Array<ProductModel>> {
    return this.http.get("/api/products").pipe(map((response: Array<ProductModel>) => {
      this.products = response;
      this.productsStream.next(this.products);
      return this.products;
    }));
  }

  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get("/api/products/" + id).pipe(map((response: ProductModel) => {
      return response;
    }));
  }

  public removeProduct(id: number) {
    return this.http.delete("/api/products/" + id);
  }

}
