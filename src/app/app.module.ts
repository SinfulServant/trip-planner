import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/authorization/form/form.component';
import { SunAnimationComponent } from './components/authorization/sun-animation/sun-animation.component';
import { MainComponent } from './components/main/main.component';
import { CurrentWeatherStatusComponent } from './components/main/current-weather-status/current-weather-status/current-weather-status.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { TripsComponent } from './components/main/trips/trips.component';
import { WeatherForFocusedTripComponent } from './components/main/trips/weather-for-focused-trip/weather-for-focused-trip.component';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    FormComponent,
    SunAnimationComponent,
    MainComponent,
    CurrentWeatherStatusComponent,
    TripsComponent,
    ModalComponent,
    WeatherForFocusedTripComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
