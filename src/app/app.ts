import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RouterModule } from '@angular/router'; // ⬅️ IMPORTAMOS ESTO
import { Footer } from './components/footer/footer';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto-angular');
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Suscribirse a los eventos de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Verificamos si la URL actual es la raíz '/'
      this.isHomePage = event.url === '/' || event.urlAfterRedirects === '/';
    });
  }
}
