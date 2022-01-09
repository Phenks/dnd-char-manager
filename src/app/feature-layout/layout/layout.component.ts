import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { EMPTY, shareReplay, tap } from 'rxjs';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';
import { UserData } from 'src/app/_shared/user';

@Component({
  selector: 'feature-layout-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  user: Observable<UserData | null> = EMPTY;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.user = this.userService.user$;
  }

  login(): void {
    this.userService.signIn();
  }

  logout(): void {
    this.userService.signOut();
  }
}
