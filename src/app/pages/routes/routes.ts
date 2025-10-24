import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouteService } from '../../services/route.services';
import { RouteModel } from '../../models/route.model';

@Component({
  selector: 'app-routes-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routes.html',
  styleUrls: ['./routes.css']
})
export class RoutesComponent {
  routes: RouteModel[] = [];

  constructor(
    private routeService: RouteService,
    private router: Router
  ) {
    this.routes = this.routeService.getRoutes();
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
