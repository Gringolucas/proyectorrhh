import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-pages.component.html',
  styleUrls: ['./auth-pages.component.css']
})
export class AuthPage {
  authForm!: FormGroup; // El signi ! indica que se inicializara antes de usarse
  isLogin = true; // Alternar entre Login y Registro

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.authForm = this.fb.group({
      name: ['', this.isLogin ? [] : [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  switchMode() {
    this.isLogin = !this.isLogin;
    this.createForm(); // Se recrea el formulario para reflejar cambios
  }

  onSubmit() {
    console.log(this.isLogin ? 'Login Data:' : 'Register Data:', this.authForm.value);
  }
}
