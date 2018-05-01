import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../weather';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LocalWeatherService {

  private _sanFran: string = 'https://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/CA/San_Francisco.json';

  private _auburnHills: string = 'https://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/MI/Auburn_Hills.json';

  private _memphis: string = 'https://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/TN/Memphis.json';

  private _honolulu: string = 'https://api.wunderground.com/api/f7c5967e5a790c53/conditions/q/HA/Honolulu.json';

  constructor(private http:HttpClient) {}

  getLocalWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this._sanFran);
  }
}
