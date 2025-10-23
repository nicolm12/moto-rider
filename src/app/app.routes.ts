import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RoutesComponent } from './pages/routes/routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'routes', component: RoutesComponent },
];
