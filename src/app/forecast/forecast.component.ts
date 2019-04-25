import { Component, OnInit,Input } from '@angular/core';
import {Weather} from '../weather';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() result;
  constructor() { }

  ngOnInit() {
  }

}
