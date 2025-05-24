import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], // ✅ Needed for built-in pipes like 'date'
  providers: [DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Example properties – update these as per your dashboard needs
  username: string = 'Akash';
  currentDate = new Date();
  stats = {
    income: 50000,
    expenses: 23000,
    savings: 27000
  };

  // Example method to refresh stats
  refreshStats() {
    // Replace with actual logic to fetch/update stats
    console.log('Refreshing dashboard stats...');
  }
}
