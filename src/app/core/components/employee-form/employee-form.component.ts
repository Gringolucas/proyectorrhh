import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Location } from '@angular/common';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class EmployeeFormComponent {
  registerForm: FormGroup;
  registerError: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private location: Location) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cuit: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  isInvalid(field: string): boolean {
    const control = this.registerForm.get(field);
    return !!(control && control.invalid && control.touched);
  }

  hasError(field: string, error: string): boolean {
    const control = this.registerForm.get(field);
    return !!(control && control.hasError(error) && control.touched);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const employeeData = {
        id: uuidv4(), // Genera UUID unico
        ...this.registerForm.value
      };

      // Obtener empleados exitentes del localStorage, si encuentra lo devuelve como archivo Json, si no hay crea un array vacio
      // Json.parse Convierte el string JSON en un objeto de JavaScript (en este caso, un array de empleados).
      const existingEmployees = JSON.parse(localStorage.getItem('employees') || '[]');

      // Agregar nuevo empleado
      existingEmployees.push(employeeData);
      localStorage.setItem('employees', JSON.stringify(existingEmployees));

      // Redireccionar al listado
      this.registerForm.reset();
      this.router.navigate(['/employee-list']);
    } else {
      this.registerError = 'Por favor complete correctamente todos los campos.';
    }
  }

  volverAtras() {
    this.location.back();
  }
}
