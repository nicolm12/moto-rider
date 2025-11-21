import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RoutesComponent } from './pages/routes/routes';
import { AccessoriesPageComponent } from './pages/accessories/accessories-page/accessories-page';
import { CartPage } from './pages/cart/cart';
import { LoginComponent } from './pages/login/login';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'routes', component: RoutesComponent },
  {path: 'accessories', component: AccessoriesPageComponent},
  {path:'cart', component: CartPage},
  {path: '', component: LoginComponent},
];
