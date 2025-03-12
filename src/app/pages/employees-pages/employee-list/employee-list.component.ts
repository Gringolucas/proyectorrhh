import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Empleado } from '../../../core/models/empleado.model'; 

@Component({
  selector: 'app-employee-list',
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListPage {
  empleados: Empleado[] = [
    { id: '1', nombre: 'Juan Pérez', apellido: 'González', cuit: '20304050607', puesto: 'Desarrollador', salario: 50000 },
    { id: '2', nombre: 'María López', apellido: 'Fernández', cuit: '27304050608', puesto: 'Diseñadora', salario: 45000 }
  ];
}

