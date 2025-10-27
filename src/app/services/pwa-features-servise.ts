import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaFeaturesService {
  public vibration(time: number): void {
    navigator.vibrate(time);
  }
}
