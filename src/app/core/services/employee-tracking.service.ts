import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeTracking, Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTrackingService {
  private readonly STORAGE_KEY = 'tracking';

  // ✅ Obtener todos los registros
  obtenerRegistros(): Observable<EmployeeTracking[]> {
    const registros = localStorage.getItem(this.STORAGE_KEY);
    const data: EmployeeTracking[] = registros ? JSON.parse(registros) : [];
    return of(data);
  }

  // ✅ Registrar nuevo registro (guarda en localStorage)
  registrarDatos(nuevoRegistro: EmployeeTracking): Observable<void> {
    const registros = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    registros.push(nuevoRegistro);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(registros));
    return of();
  }

  // ✅ Eliminar por ID
  eliminarRegistro(id: string): Observable<void> {
    const registros: EmployeeTracking[] = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const actualizados = registros.filter(registro => registro.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados));
    return of();
  }

  // ✅ Modificar registro existente
  actualizarRegistro(registroActualizado: EmployeeTracking): Observable<void> {
    const registros: EmployeeTracking[] = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const index = registros.findIndex(r => r.id === registroActualizado.id);
    if (index !== -1) {
      registros[index] = registroActualizado;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(registros));
    }
    return of();
  }
}

