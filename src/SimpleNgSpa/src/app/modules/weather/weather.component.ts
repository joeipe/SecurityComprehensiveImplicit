import { Component, OnInit } from '@angular/core';
import { WeatherForecastService, WeatherForecast } from 'src/app/core/services/weather-forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  public weatherForecasts: WeatherForecast[];

  constructor(
    private weatherForecastService: WeatherForecastService
  ) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast(): void {
    this.weatherForecastService.getWeatherForecast().subscribe(data => {
        this.weatherForecasts = data;
    });
  }

}
