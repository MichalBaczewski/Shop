import {Component, OnInit} from "@angular/core";
import {AppService} from "../../shared/service/app.service";
import {AuthService} from "../../shared/service/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private appService: AppService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.appService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}
