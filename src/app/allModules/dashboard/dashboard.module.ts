import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { ChartsModule } from 'ng2-charts';

import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardPageService } from './dashboard-page.service';
import { Data } from './data';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
    // resolve: {
    //   data: DashboardPageService
    // }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    ChartsModule,
    FuseSidebarModule,
    NgxChartsModule,
    FuseSharedModule,
    FuseWidgetModule
  ],
  declarations: [DashboardPageComponent],
  providers: [DashboardPageService, Data]
})
export class DashboardModule {}
