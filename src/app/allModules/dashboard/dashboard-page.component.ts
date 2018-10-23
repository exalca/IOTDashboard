import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import * as shape from 'd3-shape';

import { fuseAnimations } from '@fuse/animations';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { DashboardPageService } from './dashboard-page.service';
import { Data } from './data';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class DashboardPageComponent implements OnInit {
  projects: any[];
  selectedProject: any;

  widgets: any;
  widget1: any = {};
  widget2: any = {};
  widget3: any = {};
  widget4: any = {};
  widget5: any = {};
  // widget6: any = {};
  widget7: any = {};
  widget8: any = {};
  view: any[] = [700, 400];
  dateNow = Date.now();

  /**
   * Constructor
   *
   * @param {FuseSidebarService} _fuseSidebarService
   * @param {ProjectDashboardService} _projectDashboardService
   */
  constructor(
    private data: Data,
    private _fuseSidebarService: FuseSidebarService
  ) {
    /**
     * Widget 5
     */
    this.widget1 = {
      legend: false,
      explodeSlices: false,
      labels: false,
      doughnut: false,
      gradient: false,
      scheme: {
        domain: ['#36a565', '#ec5588']
      },
      onSelect: ev => {
        console.log(ev);
      }
    };

    this.widget2 = {
      legend: false,
      explodeSlices: false,
      labels: false,
      doughnut: false,
      gradient: false,
      scheme: {
        domain: ['#36a565', '#ec5588']
      },
      onSelect: ev => {
        console.log(ev);
      }
    };

    this.widget3 = {
      legend: false,
      explodeSlices: false,
      labels: false,
      doughnut: false,
      gradient: false,
      scheme: {
        domain: ['#36a565', '#ec5588']
      },
      onSelect: ev => {
        console.log(ev);
      }
    };

    this.widget4 = {
      currentRange: 'TW',
      xAxis: false,
      yAxis: false,
      gradient: false,
      legend: false,
      showXAxisLabel: false,
      xAxisLabel: 'Days',
      showYAxisLabel: false,
      yAxisLabel: 'Total active hours',
      scheme: {
        domain: ['#36a565', '#ec5588']
      },
      onSelect: ev => {
        console.log(ev);
      }
    };
    this.widget5 = {
      currentRange: 'TW',
      xAxis: false,
      yAxis: false,
      gradient: false,
      legend: false,
      showXAxisLabel: false,
      xAxisLabel: 'Days',
      showYAxisLabel: false,
      yAxisLabel: 'Total active hours',
      scheme: {
        domain: ['#36a565', '#ec5588']
      },
      onSelect: ev => {
        console.log(ev);
      }
    };

    this.widget7 = {
      currentRange: 'TW',
      xAxis: true,
      yAxis: true,
      gradient: false,
      legend: true,
      showXAxisLabel: true,
      xAxisLabel: 'Days',
      showYAxisLabel: true,
      yAxisLabel: 'Total active hours',
      scheme: {
        domain: ['#79d1d9', '#DADADA']
      },
      onSelect: ev => {
        console.log(ev);
      },
      supporting: {
        currentRange: '',
        xAxis: true,
        yAxis: false,
        gradient: false,
        legend: false,
        showXAxisLabel: false,
        xAxisLabel: 'Days',
        showYAxisLabel: false,
        yAxisLabel: 'Active hours',
        scheme: {
          domain: ['#79d1d9']
        },
        curve: shape.curveBasis
      }
    };

    this.widget8 = {
      // options
      view: [1000, 200],
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      showXAxisLabel: true,
      xAxisLabel: 'Total hours',
      showYAxisLabel: true,
      yAxisLabel: 'Device',
      colorScheme: {
        domain: ['#5AA455', '#A10A28', '#C7B42C', '#AAAAAA']
      },
      // tslint:disable-next-line:typedef
      onSelect(event) {
        console.log(event);
      }
    };

    setInterval(() => {
      this.dateNow = Date.now();
    }, 1000);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // this.projects = this._DashboardPageService.projects;
    // this.selectedProject = this.projects[0];
    // this.widgets = this._DashboardPageService.widgets;
    // this.data = new Data();
    this.widgets = Data.widgets;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }
}
