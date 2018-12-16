import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AppService} from "../service/app.service";

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(private router: Router, private appService: AppService) {}

  canActivate(): boolean {
    if (this.appService.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
