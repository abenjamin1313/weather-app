import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CurrentWeatherService } from '../service/current-weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  myCurrentWeather:CurrentWeather;
  location
  constructor(private cw:CurrentWeatherService, private http: HttpClient) { }

  readonly CITY_URL = 'http://api.wunderground.com/api/f7c5967e5a790c53/geolookup/conditions/q/IA/Cedar_Rapids.json';

  ngOnInit() {
   this.myCurrentWeather =  this.cw.weatherNow();

   navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      //console.log(this.location);
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.cw.localWeather(lat, lon).subscribe(
        (data) => {
          console.log(data);
          //this.myCurrentWeather = new CurrentWeather(data.name, data.main.temp, data.weather[0].icon, data, data, data)
        }
      )
   })
  }

}