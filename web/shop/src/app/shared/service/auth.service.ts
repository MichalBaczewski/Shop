import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginUserModel} from "../model/login-user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserModel} from "../model/user.model";
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private appService: AppService) { }

  public login(userData: LoginUserModel): Observable<UserModel> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = {
      headers: headers,
      withCredentials: true
    };

    const body = `username=${userData.email}&password=${userData.password}`;

    return this.http.post("/api/login", body, options).pipe(map((loggedUser: UserModel) => {
      this.appService.setLoggedUser(loggedUser);
      return loggedUser;
    }));
  }

  public logout() {
    return this.http.post("/api/logout", {}).pipe((data) => {
      this.appService.logout();
      return data;
    });
  }

}
