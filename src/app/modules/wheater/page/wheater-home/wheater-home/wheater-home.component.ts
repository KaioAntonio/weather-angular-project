import { Component, OnDestroy, OnInit } from '@angular/core';
import { WheaterService } from '../../../services/wheater.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Aracaju';
  wheaterDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WheaterService) {

  }

  ngOnInit(): void {
    this.getWheaterDatas(this.initialCityName);
  }

  getWheaterDatas(cityName: string): void {
    this.weatherService
    .getWheaterDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response) => {
        response && (this.wheaterDatas = response);
        console.log(this.wheaterDatas)
      },
      error: (error) => console.log(error),
    })
  }

  onSubmit(): void {
    this.getWheaterDatas(this.initialCityName);
    this.initialCityName = '';

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
