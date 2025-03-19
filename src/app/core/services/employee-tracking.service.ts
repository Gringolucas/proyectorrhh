import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeTracking, Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeTrackingService {
  private registros: EmployeeTracking[] = [];

  registrarDatos(nuevoRegistro: EmployeeTracking): Observable<void> {
    this.registros.push(nuevoRegistro);
    return of();
  }

  obtenerRegistros(): Observable<EmployeeTracking[]> {
    return of(this.registros);
  }

  eliminarRegistro(id: string): Observable<void> {
    this.registros = this.registros.filter(registro => registro.id !== id);
    return of(); // Simulación de una eliminación exitosa
  }

}
