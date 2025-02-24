import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private empleados: Empleado[] = [
    {
      nombre: 'Juan', apellido: 'Pérez', cuit: '20304050607', puesto: 'Desarrollador', salario: 50000,
      id: ''
    },
    {
      nombre: 'María', apellido: 'López', cuit: '27304050608', puesto: 'Diseñadora', salario: 45000,
      id: ''
    },
  ];

  obtenerEmpleados(): Empleado[] {
    return this.empleados;
  }

  agregarEmpleado(empleado: Empleado): void {
    this.empleados.push(empleado);
  }

  crearEmpleadoVacio(): Empleado {
      return {
      id: '',
      nombre: '',
      apellido: '',
      cuit: '',
      puesto: '',
      salario: 0
    };
  }
}
