import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IonApp} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('perfect-world');
}
