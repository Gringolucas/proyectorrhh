import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    // Simulación de login
    if (email !== 'admin@example.com' || password !== '123456') {
      this.loginError = 'Credenciales incorrectas. Inténtalo nuevamente.';
      return;
    }

    // Autenticación exitosa
    localStorage.setItem('user', email);
    this.loginError = null;
    this.router.navigate(['/dashboard']);
  }

  
}


