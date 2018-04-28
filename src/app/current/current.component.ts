import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentWeatherService } from '../service/current-weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  myCurrentWeather:CurrentWeather;

  constructor(private cw:CurrentWeatherService, private http: HttpClient) { }

  readonly CITY_URL = 'http://api.wunderground.com/api/f7c5967e5a790c53/geolookup/conditions/q/IA/Cedar_Rapids.json';

  posts: any;

  ngOnInit() {
   this.myCurrentWeather =  this.cw.weatherNow();
  }

}
