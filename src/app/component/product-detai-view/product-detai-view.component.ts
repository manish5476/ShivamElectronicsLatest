import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detai-view',
  templateUrl: './product-detai-view.component.html',
  styleUrl: './product-detai-view.component.scss',
})
export class ProductDetaiViewComponent implements OnInit {
  currentTime = new Date();
  daysLeftInNewYear: number = 0;
  dailyActivity: string = '';
  dailyActivities: { [date: string]: string } = {};

  constructor() {}

  ngOnInit(): void {
    this.calculateDaysLeftInNewYear();
  }

  calculateDaysLeftInNewYear(): void {
    const today = new Date();
    const newYearDate = new Date(today.getFullYear() + 1, 0, 1);
    this.daysLeftInNewYear = Math.floor(
      (newYearDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
  }

  saveDailyActivity(): void {
    const currentDate = this.currentTime.toLocaleDateString();
    this.dailyActivities[currentDate] = this.dailyActivity;
    this.dailyActivity = '';
  }
}
