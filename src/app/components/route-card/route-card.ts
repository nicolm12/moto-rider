import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.html',
  styleUrls: ['./route-card.css']
})
export class RouteCardComponent {
  @Input() route: any;

  // Puedes usar 'any' temporalmente, pero si tienes una interfaz
  // (por ejemplo, 'RouteModel'), es mejor usarla en lugar de 'any'.
}
