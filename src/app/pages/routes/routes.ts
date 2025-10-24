import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 9e16658d8d8c61f7d22efa777bc320bc3a64ea7b
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

<<<<<<< HEAD
  constructor(
    private routeService: RouteService,
    private router: Router
  ) {
    this.routes = this.routeService.getRoutes();
  }

  goToHome() {
    this.router.navigate(['/']);
  }
=======
  constructor(private routeService: RouteService) {
    this.routes = this.routeService.getRoutes();
  }
>>>>>>> 9e16658d8d8c61f7d22efa777bc320bc3a64ea7b
}
