import { Component, Input, OnInit } from '@angular/core';
import { IDay } from 'src/app/interfaces/day';

@Component({
  selector: 'app-weather-for-focused-trip',
  templateUrl: './weather-for-focused-trip.component.html',
  styleUrls: ['./weather-for-focused-trip.component.css'],
})
export class WeatherForFocusedTripComponent implements OnInit {
  @Input() day!: IDay;
  @Input() city!: string
  
  ngOnInit(): void {}
}
