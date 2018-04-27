import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { CurrentWeather } from './current-weather';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  
    //current:CurrentWeather = new CurrentWeather('Detroit', '88', );

    private _urldet: string = 'http://api.wunderground.com/api/f7c5967e5a790c53/forecast/geolookup/conditions/q/MI/Detroit.json';


    localWeather(lat:string, lon:String){
      return this.http.get(`http://api.wunderground.com/api/f7c5967e5a790c53/geolookup/q/${lat},${lon}.json`)
        .map((response:Response) => response.json());
    }
  }
