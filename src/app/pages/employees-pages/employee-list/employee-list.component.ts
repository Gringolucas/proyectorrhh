import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../core/services/empleado.service';
import { Empleado } from '../../../core/models/empleado.model';
import { EmployeeListComponent } from '../../../core/components/employee-list/employee-list.component';

@Component({
  selector: 'app-employee-list-page',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  imports: [EmployeeListComponent]
})
export class EmployeeListPage implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.empleadoService.obtenerEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }
}


