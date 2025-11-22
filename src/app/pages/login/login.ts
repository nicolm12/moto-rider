import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';
  loading = false;
  showPass = false;

  constructor(private auth: AuthService, private router: Router) {}

  togglePass() {
    this.showPass = !this.showPass;
  }

  submit(form: any) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    setTimeout(() => {
      const ok = this.auth.login(this.email, this.password);

      if (!ok) {
        this.error = 'Credenciales incorrectas';
        this.loading = false;
        return;
      }

      this.router.navigate(['/home']);
    }, 700);
  }

}
