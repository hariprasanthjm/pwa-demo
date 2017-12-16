import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ExpenseComponent } from '../expense-module/components/expense/expense.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseDetailComponent } from './components/expense-detail/expense-detail.component';
import { ExpenseRoutes as routes } from './expense.routes';

import {CustomMaterialModule} from '../shared/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [ExpenseComponent, AddExpenseComponent, ExpenseDetailComponent]
})
export class ExpenseModule { }
