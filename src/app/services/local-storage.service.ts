import { Injectable } from '@angular/core';
import { ITripData } from '../interfaces/trip-data';

const localStorageKey = 'trips';
const fakeTrip: ITripData[] = [
  {
    city: 'London',
    startDate: '2024-03-10',
    endDate: '2024-03-25',
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
    if (!localStorage.getItem(localStorageKey)) localStorage.setItem(localStorageKey, JSON.stringify(fakeTrip));
  }

  public updateTrips(trips: ITripData[]): void {
    localStorage.setItem(localStorageKey, JSON.stringify(trips));
  }

  public getTrips(): ITripData[] {
    //@ts-ignore
    const trips = JSON.parse(localStorage.getItem(localStorageKey));
    //@ts-ignore
    trips.forEach(trip => trip.days = [])
    return trips
  }

  public removeTrips(){
    localStorage.removeItem(localStorageKey)
  }
}
