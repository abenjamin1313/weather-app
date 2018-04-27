import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { CurrentWeather } from '../current-weather';
import { DataService } from '../data.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  myWeather:CurrentWeather;
  location

  constructor(private ds: DataService) { }

  ngOnInit() {
    
  }

}
