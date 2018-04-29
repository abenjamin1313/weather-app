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
  myData: any[] = [];
  constructor(private cw:CurrentWeatherService, private http: HttpClient) { }

  ngOnInit() {
   this.myCurrentWeather =  this.cw.weatherNow();

   navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      //console.log(this.location);
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.cw.localWeather(lat, lon).subscribe(
        (res: any) => {
          alert("success");
          this.myData = res.data;

          console.log('res is', res);
        },
        error => {
          alert("error");
        });
   })
  }
}