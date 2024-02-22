import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForFocusedTripComponent } from './weather-for-focused-trip.component';

describe('WeatherForFocusedTripComponent', () => {
  let component: WeatherForFocusedTripComponent;
  let fixture: ComponentFixture<WeatherForFocusedTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForFocusedTripComponent]
    });
    fixture = TestBed.createComponent(WeatherForFocusedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
