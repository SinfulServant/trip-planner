import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const unsplashKey = '2Tq2CZ395tBouEOYLhY-714l9QfvHR539P_l311Q5-4'
const URL = (city: string) => {
  return `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashKey}`
}

@Injectable({
  providedIn: 'root'
})
export class GetImgService {

  constructor(private http: HttpClient) { }

  public getImg(city: string): Observable<any>{
    return this.http.get(URL(city))
  }
}
