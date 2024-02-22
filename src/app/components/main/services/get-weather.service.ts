import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const myKeyAM = 'GRRNHHC2TAMMTUY7HAA6PTY9B';
const myKeyPM = '27H2JN2BB5JHLEYMYRHB7K2B3';
const myKey = 'ADVZRB3RFJLTMGZCV57Z99PUN'
@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  constructor(private http: HttpClient) {}

  public getWeather(
    city: string,
    startDate: string,
    endDate?: string
  ): Observable<any> {
    const myKey = this.changeKey()
    return this.http.get<any>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${myKey}`
    );
  }

  public getTodayWeather(city: string): Observable<any> {
    const myKey = this.changeKey()
    return this.http.get<any>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${myKey}&contentType=json`
    );
  }

  private changeKey(): string {
    const timeNow = new Date().getHours();
    return timeNow < 12 ? myKeyAM : (timeNow > 12 && timeNow < 18) ? myKeyPM : myKey;
  }
}
