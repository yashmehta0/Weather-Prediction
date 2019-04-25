import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(cityName:string){
    return this.http.get(`https://api.apixu.com/v1/forecast.json?key=72b98b4e52474657a93112259192504&q=${cityName}&days=7`);
  }
}
