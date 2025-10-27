import {Component, inject} from '@angular/core';
import {IonButton, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {PwaFeaturesService} from '../../services/pwa-features-servise';

@Component({
  selector: 'app-auth',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  private readonly pwaService = inject(PwaFeaturesService);

  protected vibration(): void {
    this.pwaService.vibration([100, 50, 100, 50, 200, 100, 300, 200, 100]);
  }
}
