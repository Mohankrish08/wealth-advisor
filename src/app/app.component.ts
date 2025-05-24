import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExpenseAdderComponent } from "./component/expense-adder/expense-adder.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { InvestmentComponent } from "./component/investment/investment.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wealth-advisor';
}
