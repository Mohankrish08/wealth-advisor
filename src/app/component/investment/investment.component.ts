import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule],
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent {
  isDarkMode = false;
  useVideoBackground = false;

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };

  // Gold
  gold = { rate: 0, grams: 0, carat: '24' };
  goldChartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{ data: [12000, 14000, 13500, 15000], label: 'Gold Value (₹)' }]
  };

  // Silver
  silver = { rate: 0, grams: 0, carat: 'Pure' };
  silverChartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{ data: [2000, 2100, 1900, 2200], label: 'Silver Value (₹)' }]
  };

  // Share
  share = { name: '', price: 0, quantity: 0 };
  shareChartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{ data: [5000, 5200, 5100, 5300], label: 'Share Investment (₹)' }]
  };

  // FD
  fd = { name: '', amount: 0, date: '' };
  fdChartData: ChartData<'line'> = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [{ data: [10000, 10000, 10000, 10000], label: 'FD Value (₹)' }]
  };

  // RD
  rd = { name: '', amount: 0, date: '' };
  rdChartData: ChartData<'line'> = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [{ data: [2000, 4000, 6000, 8000], label: 'RD Value (₹)' }]
  };

  // SIP
  sip = { name: '', amount: 0, date: '' };
  sipChartData: ChartData<'line'> = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [{ data: [1500, 3000, 4500, 6000], label: 'SIP Value (₹)' }]
  };

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  toggleVideoBackground() {
    this.useVideoBackground = !this.useVideoBackground;
  }

  submitGold() {
    alert('Gold investment submitted: ' + JSON.stringify(this.gold));
  }
  submitSilver() {
    alert('Silver investment submitted: ' + JSON.stringify(this.silver));
  }
  submitShare() {
    alert('Share investment submitted: ' + JSON.stringify(this.share));
  }
  submitFD() {
    alert('FD investment submitted: ' + JSON.stringify(this.fd));
  }
  submitRD() {
    alert('RD investment submitted: ' + JSON.stringify(this.rd));
  }
  submitSIP() {
    alert('SIP investment submitted: ' + JSON.stringify(this.sip));
  }
}
