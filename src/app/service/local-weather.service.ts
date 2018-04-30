import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LocalWeatherService {

  constructor(private http:HttpClient) {}

  getLocalWeather() {
    return Observable.forkJoin(
      this.http.get('http://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/CA/San_Francisco.json'),
      this.http.get('http://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/MI/Auburn_Hills.json'),
      this.http.get('http://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/TN/Memphis.json'),
      this.http.get('http://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/HA/Honolulu.json')
    );
  }
}
