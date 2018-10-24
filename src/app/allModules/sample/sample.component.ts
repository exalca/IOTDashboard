import { VisualisationModel } from './../../allModels/visualisation-model';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { fuseAnimations } from '@fuse/animations/index';
import { FuseConfigService } from '@fuse/services/config.service';
import { Food, UserData } from 'app/allModels/visualisation-model';
import { VisualisationService } from 'app/allServices/visualisation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SampleComponent implements OnInit {
  foods: Food[] = [
    { value: 'All-0', viewValue: 'All' },
    { value: 'Barrier-1', viewValue: 'Barrier' },
    { value: 'Taken-2', viewValue: 'Taken' }
  ];
  visualisationData: VisualisationModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private visualisationService: VisualisationService
  ) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render

    this._fuseConfigService.config = {
      layout: {
        toolbar: {
          hidden: true
        }
      }
    };
  }

  getVisualisationData(): void {
    // this.visualisationData$ = this.visualisationService.getVisualisationData();
    this.visualisationService
      .getVisualisationData()
      .subscribe((data: VisualisationModel[]) => {
        console.log(data);
        this.visualisationData = data;
      });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getVisualisationData();
    this.dataSource = new MatTableDataSource(this.visualisationData);
    while (this.visualisationData.length !== 0) {
      this.dataSource.paginator = this.paginator;
    }
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line:typedef
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray'
];
const NAMES: string[] = [
  'H91',
  'H92',
  'H93',
  'H94',
  'H95',
  'H96',
  'H97',
  'H98',
  'H99',
  'H91',
  'H91',
  'H92',
  'H94',
  'H96',
  'H92',
  'H95',
  'H96',
  'H97',
  'H92'
];

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
