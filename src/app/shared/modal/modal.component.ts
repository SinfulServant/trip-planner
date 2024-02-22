import { Component, OnInit } from '@angular/core';
import { ITripData } from 'src/app/interfaces/trip-data';
import { Output, EventEmitter } from '@angular/core'; 
import citiesArray from './popularCities';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  public cities: string[] = citiesArray
  public formData: ITripData = {
    city: '',
    startDate: '',
    endDate: '',
    img: '',
    days: []
  }

  @Output() sendFormData = new EventEmitter<ITripData>();
  @Output() closeModal = new EventEmitter<void>()

  ngOnInit(): void {
    // @ts-ignore
    this.initDefaultInputsDate();
  }

  private initDefaultInputsDate(): void {
    const inputsDate = document.querySelectorAll('input[type="date"]');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    inputsDate.forEach((input) => {
      // @ts-ignore
      input.value = formattedDate;
    });
  }

  public addNewTrip(): void {
    this.sendFormData.emit(this.formData)
    this.closeModal.emit()
  }

  public doCloseModal(): void {
    this.closeModal.emit()
  }

  public shotDownModal(): void {}
}
