import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_KEY = 'urban_user';

  constructor() {}

  login(email: string, password: string): boolean {
    // Login ficticio, en un proyecto real lo validarías con backend
    if (email === 'admin@correo.com' && password === '123456') {
      localStorage.setItem(this.USER_KEY, JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.USER_KEY) !== null;
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.USER_KEY) || 'null');
  }
}
