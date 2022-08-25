import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { SessionsService } from 'src/app/_services/sessions.service';
import { UserService } from 'src/app/_services/user.service';
import { NewSessionComponent } from '../new-session/new-session.component';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less'],
})
export class OverviewComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public sessionSerivce: SessionsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openNewSessionDialog(): void {
    const dialogRef = this.dialog.open(NewSessionComponent, {
      width: '45vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sessionSerivce.create(result);
      }
    });
  }

  navToSession(id: number): void {
    this.router.navigate(['sessions', id]);
  }

  joinSession(id: number): void {}
}
