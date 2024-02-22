import { Injectable } from '@angular/core';
import { ITripData } from '../interfaces/trip-data';

const localStorageKey = 'trips';
const fakeTrip: ITripData[] = [
  {
    city: 'London',
    startDate: '2024-02-01',
    endDate: '2024-02-14',
    img: '',
    days: [],
  },
];

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public makeInitTrip(): void {
    if (!localStorage.getItem(localStorageKey) || localStorage.getItem('trips') !== '[]') localStorage.setItem(localStorageKey, JSON.stringify(fakeTrip));
  }

  public updateTrips(trips: ITripData[]): void {
    localStorage.setItem(localStorageKey, JSON.stringify(trips));
  }

  public getTrips(): ITripData[] {
    //@ts-ignore
    return JSON.parse(localStorage.getItem(localStorageKey));
  }

  public removeTrips(){
    localStorage.removeItem(localStorageKey)
  }
}
