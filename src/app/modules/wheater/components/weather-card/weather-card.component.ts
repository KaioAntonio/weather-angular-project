import { Component, Input } from '@angular/core';
import { faClock, faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []

})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
  clockIcon = faClock;

  getCurrentDateTime(): string {
    if (this.weatherDatasInput && this.weatherDatasInput.timezone) {
      const now = moment.utc();
      const localTime = now.utcOffset(this.weatherDatasInput.timezone / 60);
      moment.locale('pt-br');

      return localTime.format('LLL');
    }
    return '';
  }

}
