import { Injectable } from '@angular/core';
import { RouteModel } from '../models/route.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private routes: RouteModel[] = [
    {
      name: 'Ruta Sierra Nevada',
      description: 'Montañas, ríos y paisajes impresionantes',
      distance: 185,
      duration: '4h 30m',
      difficulty: 'Intermedio',
      riders: 24,
      image: 'assets/ruta1.jpg',
      rating: 4.5
    },
    {
      name: 'Villa de Leyva',
      description: 'Ruta de curvas y vistas coloniales',
      distance: 120,
      duration: '3h 30m',
      difficulty: 'Difícil',
      riders: 12,
      image: 'assets/ruta2.jpg',
      rating: 4.7
    }
  ];

  getRoutes(): RouteModel[] {
    return this.routes;
  }
}
