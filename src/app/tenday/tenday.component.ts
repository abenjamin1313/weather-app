import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenday',
  templateUrl: './tenday.component.html',
  styleUrls: ['./tenday.component.scss']
})
export class TendayComponent implements OnInit {

  title = 'Ten Day Forecast';
  
  constructor() { }

  ngOnInit() {
  }

}
