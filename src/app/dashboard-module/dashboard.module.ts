import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from '../dashboard-module/component/dashboard/dashboard.component';

const HomeRoutes = [{ path: '', component: DashboardComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes)
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
