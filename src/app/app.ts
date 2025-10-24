import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RouterModule } from '@angular/router'; // ⬅️ IMPORTAMOS ESTO

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto-angular');
}
