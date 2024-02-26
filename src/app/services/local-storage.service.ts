import { Injectable } from '@angular/core';
import { ITripData } from '../interfaces/trip-data';

const localStorageKeyTrips = 'trips';
const localStorageKeyTripsLastUpdate = 'lastUpdate';
const oneHourInMs = 3600000;

const fakeTrip: ITripData[] = [
  {
    city: 'London',
    startDate: '2024-03-10',
    endDate: '2024-03-25',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Njk5ODB8MHwxfHNlYXJjaHwxfHxMb25kb258ZW58MHx8fHwxNzA4ODc5ODU5fDA&ixlib=rb-4.0.3&q=80&w=400',
    days: [],
  },
];

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public makeInitTrip(): void {
    if (!localStorage.getItem(localStorageKeyTrips)) {
      localStorage.setItem(localStorageKeyTrips, JSON.stringify(fakeTrip));
      localStorage.setItem(
        localStorageKeyTripsLastUpdate,
        new Date().getTime().toString()
      );
    }
  }

  public updateTrips(trips: ITripData[]): void {
    localStorage.setItem(localStorageKeyTrips, JSON.stringify(trips));
    localStorage.setItem(
      localStorageKeyTripsLastUpdate,
      new Date().getTime().toString()
    );
  }

  public getTrips(): ITripData[] {
    //@ts-ignore
    const trips = JSON.parse(localStorage.getItem(localStorageKeyTrips));
    //@ts-ignore
    return trips;
  }

  public checkIsRelevance(): boolean {
    const lastUpdate = localStorage.getItem(localStorageKeyTripsLastUpdate);
    if (lastUpdate !== null) {
      const now = new Date().getTime();
      return now - +lastUpdate < oneHourInMs * 4;
    }
    return false;
  }

  public removeTrips() {
    localStorage.removeItem(localStorageKeyTrips)
    localStorage.removeItem(localStorageKeyTripsLastUpdate)
  }
}
