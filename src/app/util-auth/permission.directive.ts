import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UserService } from '../_services/user.service';

@Directive({
  selector: '[hasRole]',
})
export class PermissionDirective implements OnChanges {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {
    this.userService.user$.subscribe(() => this.checkPermissions());
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkPermissions();
  }
  @Input() hasRole?: string[];

  private checkPermissions() {
    if (
      this.userService.user != null &&
      this.hasRole?.includes(this.userService.user.role)
    ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
