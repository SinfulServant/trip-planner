import { Component } from '@angular/core';
import { ITripData } from 'src/app/interfaces/trip-data';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public currentTrip!: ITripData;

  constructor(private lsService: LocalStorageService) {}

  ngOnInit() {
    this.lsService.makeInitTrip();
  }

  public getActiveTrip($event: any): void {
    this.currentTrip = $event;
  }
}
