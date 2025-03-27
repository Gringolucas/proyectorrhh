import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms'; /** AbstractControl: Clase base de cualquier control de formulario (FormControl, FormGroup, etc). */
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule]
})


export class RegisterComponent {
  registerForm: FormGroup;
  registerError: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isInvalid(field: string): boolean {
    const control: AbstractControl | null = this.registerForm.get(field);
    return !!(control && control.invalid && control.touched);
  }

  hasError(field: string, error: string): boolean {
    const control: AbstractControl | null = this.registerForm.get(field);
    return !!(control && control.hasError(error) && control.touched);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Register Data:', this.registerForm.value);

      // Simulación de registro (podrías llamar a un servicio aquí)
      localStorage.setItem('user', this.registerForm.value.email);

      this.router.navigate(['/dashboard']);
    } else {
      this.registerError = 'Por favor completa correctamente todos los campos.';
    }
  }
}
