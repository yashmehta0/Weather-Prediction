import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
import {Weather} from './weather';
import {DataService} from './data.service';
import { getLocaleDayNames } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  data:Array<Weather>=[];
  result:any;
  currentRes:Weather=new Weather();
  days:Array<string>=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  constructor(private service:DataService){}
onSubmit(form:NgForm){
  
  this.service.getData(form.value.city).subscribe( (data) => {
    this.result=data;
    this.currentRes.city=this.result.location.name;
    this.currentRes.icon=this.result.current.condition.icon;
    this.currentRes.type=this.result.current.condition.text;
    this.currentRes.humidity=this.result.current.humidity;
    this.currentRes.temp=this.result.current.temp_c;
    this.currentRes.windSpeed=this.result.current.wind_kph;
    this.currentRes.prec=this.result.current.precip_mm;
    console.log(this.currentRes)
    const forecastArray=this.result.forecast.forecastday;
    this.data = [];
    for(let itr=0;itr<forecastArray.length;itr++){
       const obj=new Weather();
       obj.city=this.result.location.name;
       obj.minTemp=forecastArray[itr].day.mintemp_c;
       obj.maxTemp=forecastArray[itr].day.maxtemp_c;
       obj.icon=forecastArray[itr].day.condition.icon;
       obj.type=forecastArray[itr].day.condition.text;
       obj.day=this.days[this.getCurrentDay(forecastArray[itr].date)];
       this.data.push(obj);
    }
    this.data[0].day="Today";
  });
}
  getCurrentDay(date:string){
    var dd=new Date(date);
     return dd.getDay();
  }
}
