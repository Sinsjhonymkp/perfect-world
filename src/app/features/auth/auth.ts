import { Component, inject, signal } from '@angular/core';
import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PwaFeaturesService } from '../../services/pwa-features-servise';

@Component({
  selector: 'app-auth',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonAlert,
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  protected readonly alertButtons = signal(['Action']);
  private readonly pwaService = inject(PwaFeaturesService);

  protected login(): void {
    this.vibration();
  }

  protected vibration(): void {
    this.pwaService.vibration(200);
  }
}
