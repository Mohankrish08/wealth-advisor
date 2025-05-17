import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseAdderComponent } from "./component/expense-adder/expense-adder.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseAdderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wealth-advisor';
}
