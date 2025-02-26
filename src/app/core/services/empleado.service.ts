import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private empleadosSubject = new BehaviorSubject<Empleado[]>(this.empleados);

  obtenerEmpleados() {
    return this.empleadosSubject.asObservable();
  }

  agregarEmpleado(empleado: Empleado): void {
    console.log('Agregando empleado:', empleado); // Debugging
    this.empleados.push(empleado); //Agrega el nuevo empleado al array
    this.empleadosSubject.next([...this.empleados]); //next lo utiliza para emitir un nuevo valor
    // [...] (spread operator) crea una copia nueva del array en lugar de modificar el original.
    // Esto es necesario porque Angular no detecta cambios en arrays mutados directamente.
    console.log('Empleados después de agregar:', this.empleados); // Debugging
  }
}

  // crearEmpleadoVacio(): Empleado {
  //   return {
  //   id: '',
  //   nombre: '',
  //   apellido: '',
  //   cuit: '',
  //   puesto: '',
  //   salario: 0
  //   };
  // }
