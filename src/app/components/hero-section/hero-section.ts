import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para [ngStyle] y *ngIf
import { RouterModule } from '@angular/router'; // Necesario para routerLink

@Component({
  selector: 'app-hero-section',
  // Si tu template y estilos están en archivos separados, usa templateUrl/styleUrls
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css'],

  // Habilitamos el modo standalone para importar módulos directamente
  standalone: true,
  // Importamos los módulos necesarios para las directivas del HTML
  imports: [
    CommonModule, // Contiene *ngIf y [ngStyle]
    RouterModule  // Contiene routerLink
  ]
})
export class HeroSectionComponent {
  // Las propiedades de entrada están correctas
  @Input() title = '';
  @Input() subtitle = '';
  @Input() buttonText = '';
  @Input() background = 'assets/hero-default.jpg';
}