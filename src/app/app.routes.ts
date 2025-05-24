import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ExpenseAdderComponent } from './component/expense-adder/expense-adder.component';
import { InvestmentComponent} from './component/investment/investment.component';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'expense-adder', component: ExpenseAdderComponent },
    { path: 'investment', component: InvestmentComponent}
];
    