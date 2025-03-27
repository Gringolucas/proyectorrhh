import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [CommonModule],
  templateUrl: './auth-pages.component.html',
  styleUrls: ['./auth-pages.component.css']
})
export class AuthComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/auth/login'); // Redirige a Login
  }

  goToRegister() {
    this.router.navigateByUrl('/auth/register'); // Redirige a Registro
  }
}