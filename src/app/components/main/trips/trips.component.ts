import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITripData } from 'src/app/interfaces/trip-data';
import { GetWeatherService } from '../services/get-weather.service';
import { IDay } from 'src/app/interfaces/day';
import { GetImgService } from '../services/get-img.service';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  public isShowModal: boolean = false;
  public activeTrip = new BehaviorSubject<number>(0);
  public searchInput: string = '';
  //
  public tripsList!: ITripData[];
  @Output() sendTrip = new EventEmitter<ITripData>();
  public currentPageOfTrips: number = 1;
  public tripsInView!: ITripData[];
  //
  private currentPageOfWeatherDays: number = 1;
  public focusedTripDays!: IDay[];

  constructor(
    private getWeatherService: GetWeatherService,
    private getImgService: GetImgService,
    private lsService: LocalStorageService
  ) {
    this.tripsList = this.lsService.getTrips();
  }

  ngOnInit(): void {
    this.toFilterTripsPerStartDate();
    this.initDataForCurrentTrips();
    this.calculateTripDaysView();
    this.calculateTripsView();
    this.subscripeOnActiveTrip();
  }

  public clickOnTrip(i: number): void {
    this.activeTrip.next(i + (this.currentPageOfTrips * 3 - 3));
    this.calculateTripsView();
    this.calculateTripDaysView();
  }

  //View trips
  /* This method need for caltulate trip view 
  BUT it has one more purpose - 
  return filted arr for show or unShow arrows left and right */
  public calculateTripsView(toFiltedFromInput: boolean = false): ITripData[] {
    if (toFiltedFromInput) this.currentPageOfTrips = 1;
    const tripsList = this.tripsList.filter((trip: ITripData) =>
      trip.city.toLowerCase().includes(this.searchInput.toLowerCase())
    );

    this.tripsInView = [
      ...tripsList.slice(
        (this.currentPageOfTrips - 1) * 3,
        this.currentPageOfTrips * 3
      ),
    ];
    return tripsList;
  }

  public nextTripsView(changer: number): void {
    this.currentPageOfTrips += changer;
    this.calculateTripsView();
  }

  // View days
  private calculateTripDaysView(): void {
    this.focusedTripDays = [
      ...this.calculateTripsView()[this.activeTrip.value].days.slice(
        (this.currentPageOfWeatherDays - 1) * 7,
        this.currentPageOfWeatherDays * 7
      ),
    ];
  }

  public nextDaysWeather(changer: number): void {
    this.currentPageOfWeatherDays += changer;
    this.calculateTripDaysView();
  }

  // work with Data
  public getNewTrip($event: ITripData): void {
    this.getImg($event.city, $event);
    this.tripsList.push($event);
    this.getWeatherService
      .getWeather($event.city, $event.startDate, $event.endDate)
      .subscribe((dataAboutWeather) => {
        this.tripsList[this.tripsList.length - 1].days.push(
          ...dataAboutWeather.days
        );
        this.toFilterTripsPerStartDate()
        this.lsService.updateTrips(this.tripsList);
      });
  }

  private initDataForCurrentTrips(): void {
    console.log(!this.lsService.checkIsRelevance())
    if(!this.lsService.checkIsRelevance()){
      this.tripsList.forEach((trip: ITripData) => {
        this.getWeatherService
          .getWeather(trip.city, trip.startDate, trip.endDate)
          .subscribe((dataAboutWeather) => {
            trip.days.push(...dataAboutWeather.days);
            this.getImg(trip.city, trip);
            this.clickOnTrip(this.activeTrip.value);
            this.lsService.updateTrips(this.tripsList);
          });
      });
    }
  }

  private getImg(city: string, trip: ITripData): void {
    this.getImgService.getImg(city).subscribe((imgRes) => {
      trip.img = imgRes.results[0].urls.small;
      this.lsService.updateTrips(this.tripsList);
    });
  }

  private toFilterTripsPerStartDate(): void {
    if(this.tripsList.length){
      this.tripsList.sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
    }
  }

  public deleteTrip(i: number): void {
    const index = i + (this.currentPageOfTrips * 3 - 3)
    this.tripsList.splice(index, 1)
    this.lsService.updateTrips(this.tripsList)
    if(!this.tripsList.length) this.lsService.removeTrips()
  }

  // OUTPUTS
  private sendCurrentTrip(): void {
    this.sendTrip.emit(this.tripsList[this.activeTrip.value]);
  }

  private subscripeOnActiveTrip(): void {
    this.activeTrip.subscribe(() => {
      this.sendCurrentTrip();
    });
  }
}
