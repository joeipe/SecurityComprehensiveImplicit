import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  apiRoot: string;
  constructor(private _http: HttpClient) {
    this.apiRoot = 'https://localhost:44336/' + 'WeatherForecast';
   }

   getWeatherForecast(): Observable<WeatherForecast[]> {
    return this._http.get<WeatherForecast[]>(`${this.apiRoot}/`);
    /*
    return from(this.authService.getAccessToken().then(token => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this._http.get<WeatherForecast[]>(`${this.apiRoot}/`, { headers: headers }).toPromise();
    }));
    */
  }
}

export interface WeatherForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}