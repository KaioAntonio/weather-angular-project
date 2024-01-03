import { Component, OnInit } from '@angular/core';
import { WheaterService } from '../../../services/wheater.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit{
  initialCityName = 'Aracaju';
  wheaterDatas!: WeatherDatas;

  constructor(private weatherService: WheaterService) {

  }
  ngOnInit(): void {
    this.getWheaterDatas(this.initialCityName);
  }

  getWheaterDatas(cityName: string): void {
    this.weatherService.getWheaterDatas(cityName)
    .subscribe({
      next: (response) => {
        response && (this.wheaterDatas = response);
        console.log(this.wheaterDatas)
      },
      error: (error) => console.log(error),
    })
  }

}
