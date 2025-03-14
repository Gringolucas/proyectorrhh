import { Component } from '@angular/core';
import { EmpleadoService } from '../../../core/services/empleado.service';
import { EmployeeFormComponent } from '../../../core/components/employee-form/employee-form.component';


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css'],
  imports: [EmployeeFormComponent]
})
export class RegisterEmployeePage {
  constructor(private empleadoService: EmpleadoService) {}

  registrarEmpleado(empleado: any) {
    this.empleadoService.registrarEmpleado(empleado).subscribe(() => {
      alert('Empleado registrado con éxito');
    });
  }
}


