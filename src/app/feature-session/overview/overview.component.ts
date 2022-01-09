import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
} from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { SessionsService } from 'src/app/_services/sessions.service';
import { NewSessionComponent } from '../new-session/new-session.component';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less'],
})
export class OverviewComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public sessionSerivce: SessionsService
  ) {}

  ngOnInit(): void {}

  openNewSessionDialog(): void {
    const dialogRef = this.dialog.open(NewSessionComponent, {
      width: '45vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed' + result);
      if (result) {
        this.sessionSerivce.create(result);
      }
    });
  }
}
