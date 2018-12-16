import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, startWith} from "rxjs/operators";
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private loggedUser: UserModel = null;
  private loggedUserStream: Subject<UserModel> = new Subject();

  constructor(private http: HttpClient) { }

  public setLoggedUser(loggedUser: UserModel) {
    this.loggedUser = loggedUser;
    this.loggedUserStream.next(this.loggedUser);
  }

  public getUser(): UserModel {
    return this.loggedUser;
  }

  public getLoggedUserStream(): Observable<UserModel> {
    return this.loggedUserStream.asObservable().pipe(startWith(this.loggedUser));
  }

  public getLoggedUserInfo(): Observable<UserModel> {
    return this.http.get("/api/logged-user-info").pipe(map((loggedUser: UserModel) => {
      this.loggedUser = loggedUser;
      this.loggedUserStream.next(this.loggedUser);
      return this.loggedUser;
    }));
  }

  public isLoggedIn(): boolean {
    return !!this.loggedUser;
  }

  public hasRole(authority: string): boolean {
    return this.isLoggedIn() ? JSON.stringify(this.loggedUser.roles).search(authority) !== -1 : false;
  }

  public hasAnyRole(roles: Array<string>): boolean {
    if (this.isLoggedIn()) {
      let stringifyAuth = JSON.stringify(this.loggedUser.roles);
      for (let role of roles) {
        if (stringifyAuth.search(role) !== -1) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  public logout(): UserModel {
    this.loggedUser = null;
    this.loggedUserStream.next(this.loggedUser);
    return this.loggedUser;
  }

}
