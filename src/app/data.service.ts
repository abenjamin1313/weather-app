import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
    
    //searchCity$ = new City<string>();


    getDet(searchString) {
      console.log('queryAPI', searchString);
      return this.http.get('http://api.wunderground.com/api/f7c5967e5a790c53/forecast/geolookup/conditions/q/MI/Detroit.json')
      .map(result => result['data']['children'])
    }
  }
