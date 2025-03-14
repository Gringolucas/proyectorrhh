import { Component, Input } from '@angular/core';
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
export class EmployeeListComponent {
  @Input() empleados: Empleado[] = []; // ✅ Permite recibir empleados desde el padre

  eliminarEmpleado(id: string) {
    this.empleados = this.empleados.filter(e => e.id !== id);
  }

  editarEmpleado(empleado: Empleado) {
    alert('Empleado actualizado');
  }
}

