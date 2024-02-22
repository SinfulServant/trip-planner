import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherStatusComponent } from './current-weather-status.component';

describe('CurrentWeatherStatusComponent', () => {
  let component: CurrentWeatherStatusComponent;
  let fixture: ComponentFixture<CurrentWeatherStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherStatusComponent]
    });
    fixture = TestBed.createComponent(CurrentWeatherStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
