import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model'; // Asegúrate de que la ruta sea correcta
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = []; // ✅ Array en memoria

  constructor() {}

  obtenerEmpleados(): Observable<Empleado[]> {
    return of(this.empleados); // ✅ Retorna el array como observable
  }

  registrarEmpleado(empleado: Empleado): Observable<any> {
    this.empleados.push(empleado);
    return of({ message: 'Empleado registrado correctamente' }); // ✅ Simula respuesta
  }

  editarEmpleado(empleado: Empleado): Observable<any> {
    const index = this.empleados.findIndex(e => e.id === empleado.id);
    if (index !== -1) {
      this.empleados[index] = empleado;
    }
    return of({ message: 'Empleado actualizado correctamente' });
  }

  eliminarEmpleado(id: string): Observable<any> {
    this.empleados = this.empleados.filter(e => e.id !== id);
    return of({ message: 'Empleado eliminado correctamente' });
  }
}


