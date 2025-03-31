import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../../models/empleado.model';

@Component({
  selector: 'app-employee-list',
  standalone: true, // Asegura que es un componente independiente
  imports: [CommonModule, FormsModule], // Importa módulos necesarios
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empleados: Empleado[] = [];
  editandoId: String | null = null;

  ngOnInit(): void {
    const data = localStorage.getItem('employees');
    this.empleados = data ? JSON.parse(data) : [];
  }

  eliminarEmpleado(id: string): void {
    this.empleados = this.empleados.filter(e => e.id !== id);
    localStorage.setItem('employees', JSON.stringify(this.empleados));
  }

  habilitarEdicion(id: string): void {
    this.editandoId = id;
  }

  guardarCambios(): void {
    localStorage.setItem('employees', JSON.stringify(this.empleados));
    this.editandoId = null;
  }

}

