import { VisualisationModel } from './../../allModels/visualisation-model';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { fuseAnimations } from '@fuse/animations/index';
import { FuseConfigService } from '@fuse/services/config.service';
import { VisualisationService } from 'app/allServices/visualisation.service';
import { Food } from 'app/allModels/visualisation-model';

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
  displayedColumns: string[] = [
    'device',
    'todayStatus',
    'todayDuration',
    'yesterdayDuration',
    'DBYesterdayDuration'
  ];
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
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

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
        this.dataSource = new MatTableDataSource(this.visualisationData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getVisualisationData();
  }

  // tslint:disable-next-line:typedef
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
