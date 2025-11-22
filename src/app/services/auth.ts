import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_KEY = 'urban_user';

  login(email: string, password: string): boolean {
    // Usuario "creado" para login local
    const allowedUser = {
      email: 'admin@correo.com',
      password: '123456'
    };

    if (email === allowedUser.email && password === allowedUser.password) {
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
