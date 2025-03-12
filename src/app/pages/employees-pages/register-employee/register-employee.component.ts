import { Component } from '@angular/core';
import { EmpleadoComponent } from '../../../core/components/empleado-form/empleado-form.component';

@Component({
  selector: 'app-register-employee',
  standalone: true,
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css'],
  imports: [EmpleadoComponent],
})
export class RegisterEmployeePage { }

