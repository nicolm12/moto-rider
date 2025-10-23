import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ ¡Nueva importación!

@Component({
  selector: 'app-filters',
  templateUrl: './filters.html',
  styleUrls: ['./filters.css'],
  // Si es standalone, añade CommonModule a imports
  standalone: true, // Asumiendo que es un componente standalone
  imports: [CommonModule] // ⬅️ ¡NECESARIO para *ngFor!
})
export class FiltersComponent {
  difficulties = ['Todas','Fácil','Intermedio','Difícil'];
  distances = ['Corta','Media','Larga'];
  types = ['Todo','Turística','Aventura'];

  trackByType(index: number, type: string): string {
    return type;
  }
}