import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WealthServiceService } from '../../services/wealth-service.service';
import { Wealth } from '../../models/wealth';

@Component({
  selector: 'app-expense-adder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expense-adder.component.html',
  styleUrls: ['./expense-adder.component.css']
})
export class ExpenseAdderComponent {
  country = 'India';
  state = 'Tamil Nadu';
  district = '';
  selectedExpenseType = '';
  reason = '';
  date = this.todayString();
  amount: number | null = null;

  expenseTypes = ['Food', 'Transport', 'Bills', 'Shopping', 'Other'];

  private todayString(): string {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  }

  constructor(private wealthService: WealthServiceService) {}

  onSubmit() {
    // if (
    //   this.country && this.state && this.district &&
    //   this.selectedExpenseType && this.reason &&
    //   this.date && this.amount !== null && this.amount > 0
    // ) {
    //   const expenseData: Wealth = {
    //     Country: this.country,
    //     State: this.state,
    //     District: this.district,
    //     ExpenseType: this.selectedExpenseType,
    //     Reason: this.reason,
    //     Date: this.date,
    //     Amount: this.amount,
    //   };

    //   const test = {
    //     Amount: 251,
    //     Country: "India",
    //     Date: "2025-05-19",
    //     District: "Coimbatore",
    //     ExpenseType: "Food",
    //     Reason: "Dinner",
    //     State: "Tamil Nadu"
    //   }

    //   console.log('Expense submitted:', test);

    //   this.wealthService.addWealthEntry(test);
      
    // } else {
    //   alert('Please fill all fields correctly!');
    // }

    const expenseData: Wealth = {
        Country: this.country,
        State: this.state,
        District: this.district,
        ExpenseType: this.selectedExpenseType,
        Reason: this.reason,
        Date: this.date,
        Amount: this.amount|| 0, // Default to 0 if null
      };

      

      console.log('Expense submitted:', expenseData);

      this.wealthService.addWealthEntry(expenseData);
  }
}
