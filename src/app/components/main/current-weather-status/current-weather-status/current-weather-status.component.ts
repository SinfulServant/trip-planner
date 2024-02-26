import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IDay } from 'src/app/interfaces/day';
import { ITripData } from 'src/app/interfaces/trip-data';
import { GetWeatherService } from '../../services/get-weather.service';

@Component({
  selector: 'app-current-weather-status',
  templateUrl: './current-weather-status.component.html',
  styleUrls: ['./current-weather-status.component.css'],
})
export class CurrentWeatherStatusComponent implements OnInit, OnChanges {
  @Input() currentTrip!: ITripData;
  public currentDate: Date = new Date();
  public differenceBetweenDates!: number;
  public currentDay: IDay = {
    conditions: '',
    datetime: '',
    description: '',
    preciptype: [],
    temp: 0,
    tempmax: 15,
    tempmin: 0,
    icon: 'wind',
  };

  constructor(
    private getWeatherService: GetWeatherService,
  ) {}

  ngOnInit(): void {
    this.calcDifferenceDates();
    this.doSetInterval();
    // this.updateWeather();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calcDifferenceDates();
    // this.updateWeather();
  }

  private updateWeather(): void {
    this.getWeatherService
      .getTodayWeather(this.currentTrip.city)
      .subscribe((data) => {
        this.currentDay.temp = data.days[0].temp;
        this.currentDay.icon = data.days[0].icon;
      });
  }

  private calcDifferenceDates(): void {
    this.differenceBetweenDates =
      new Date(this.currentTrip.startDate).getTime() -
      this.currentDate.getTime();
  }

  private doSetInterval(): void {
    setInterval(() => {
      this.differenceBetweenDates -= 1000;
    }, 1000);
  }
}
