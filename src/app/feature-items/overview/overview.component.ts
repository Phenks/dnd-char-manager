import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsService } from 'src/app/_services/items.service';
import { Item } from 'src/app/_shared/character';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less'],
})
export class OverviewComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'name',
    'value',
    'weight',
    'rarity',
    'description',
    'actions',
  ];
  dataSource = new MatTableDataSource<Item>();

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  @Input() mode: 'select' | 'view' = 'view';
  @Output() itemSelected = new EventEmitter<Item>();

  constructor(public itemService: ItemsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.itemService.data$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  applyFilter(event: Event) {
    const search = (event.target as HTMLInputElement).value;
    this.dataSource.filter = search.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openNewItemDialog() {
    this.dialog.open(NewComponent, {
      width: '45vw',
    });
  }

  openEditItemDialog(item: Item) {
    this.dialog.open(NewComponent, {
      width: '45vw',
      data: {
        item: item,
      },
    });
  }

  routeToDndBeyond(item: Item) {
    window.open(
      ' https://duckduckgo.com/?q=!ducky+' +
        item.name +
        '+site%3Awww.dndbeyond.com',
      '_blank'
    );
  }

  selectItem(item: Item) {
    this.itemSelected.emit(item);
  }
}
