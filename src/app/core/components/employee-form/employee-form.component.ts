import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class EmployeeFormComponent {
  @Output() onSubmit = new EventEmitter<any>(); // ✅ Emite el empleado registrado al padre
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cuit: ['', Validators.required],
      puesto: ['', Validators.required],
      salario: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  submitForm() {
    if (this.employeeForm.valid) {
      this.onSubmit.emit(this.employeeForm.value);
      this.employeeForm.reset();
    }
  }
}
