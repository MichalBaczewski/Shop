import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {AppService} from "../service/app.service";


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private appService: AppService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.appService.isLoggedIn()) {
      if (this.appService.hasRole('ROLE_ADMIN')) {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

