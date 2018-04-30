import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
// service
import { LocalWeatherService } from '../service/local-weather.service';
// pipe
import { DerpPipe } from '../derp.pipe';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  location
  public sanFransicos;
  public auburnHillss;
  public memphiss;
  public honolulus;

  constructor(private lws: LocalWeatherService, protected http: HttpClient) { }

  title = 'Current Weather';

  ngOnInit() {
    this.getLocalWeather();
  }

  getLocalWeather() {
    this.lws.getLocalWeather().subscribe(
      data => { 
        this.sanFransicos = data[0]
        this.auburnHillss = data[1]
        this.memphiss = data[2]
        this.honolulus = data[3]
      },
      err => console.error(err),
      () => console.log('done loading local weather', this.sanFransicos)
    );
  }

}