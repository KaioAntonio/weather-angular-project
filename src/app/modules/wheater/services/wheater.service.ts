import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {

  private apiKey = "8b7402650e685781572922fc4f3af5b6";

  constructor(private http: HttpClient) {}

  getWheaterDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
    {})
  }
}
