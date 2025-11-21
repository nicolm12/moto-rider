import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ⬅️ IMPORTAMOS ESTO
import { AccessoriesComponent } from '../../components/accessories/accessories'; // ⬅️ Asegúrate de que esta ruta sea correcta
import { HeroSectionComponent } from '../../components/hero-section/hero-section'; // ⬅️ Importado para poder usar <app-hero-section>
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // ⬅️ LO AÑADIMOS AQUÍ para que routerLink funcione
    AccessoriesComponent, // Componente Accessories
    HeroSectionComponent,
  ]
})
export class HomeComponent {
  // ... lógica de HomeComponent
}
