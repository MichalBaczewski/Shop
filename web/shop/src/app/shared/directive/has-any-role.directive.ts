import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {AppService} from "../service/app.service";
import {UserModel} from "../model/user.model";

@Directive({
  selector: '[hasAnyRole]'
})
export class HasAnyRoleDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private appService: AppService) {}

  @Input() set hasAnyRole(roles: Array<string>) {
    this.appService.getLoggedUserStream().subscribe((loggedUser: UserModel) => {
      if (this.appService.hasAnyRole(roles)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

}
