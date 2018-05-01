import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
// service
import { LocalWeatherService } from '../service/local-weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  public weathers = [];

  constructor(private lws: LocalWeatherService, protected http: HttpClient) { }

  title = 'Current Weather';

  ngOnInit() {

    this.lws.getLocalWeather()
      .subscribe(data => this.weathers = data);
      
  }
}