import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AppService} from "../service/app.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private appService: AppService) {}

  canActivate(): boolean {
    if (this.appService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
