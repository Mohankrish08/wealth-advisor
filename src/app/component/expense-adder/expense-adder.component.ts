import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit() {
    if (
      this.country && this.state && this.district &&
      this.selectedExpenseType && this.reason &&
      this.date && this.amount !== null && this.amount > 0
    ) {
      console.log('Expense submitted:', {
        country: this.country,
        state: this.state,
        district: this.district,
        type: this.selectedExpenseType,
        reason: this.reason,
        date: this.date,
        amount: this.amount,
      });
      alert('Expense submitted successfully!');
      // Reset to defaults
      this.country = 'India';
      this.state = 'Tamil Nadu';
      this.district = '';
      this.selectedExpenseType = '';
      this.reason = '';
      this.date = this.todayString();
      this.amount = null;
    } else {
      alert('Please fill all fields correctly!');
    }
  }
}
