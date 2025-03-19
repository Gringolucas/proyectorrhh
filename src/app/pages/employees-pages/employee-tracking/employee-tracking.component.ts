import { Component, OnInit } from '@angular/core';
import { EmployeeTrackingService } from '../../../core/services/employee-tracking.service';
import { EmpleadoService } from '../../../core/services/empleado.service';
import { Empleado, EmployeeTracking } from '../../../core/models/empleado.model';
import { CommonModule } from '@angular/common';
import { EmployeeTrackingFormComponent } from '../../../core/components/employee-tracking-form/employee-tracking-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-tracking',
  templateUrl: './employee-tracking.component.html',
  styleUrls: ['./employee-tracking.component.css'],
  imports: [CommonModule, EmployeeTrackingFormComponent ]
})
export class EmployeeTrackingComponent implements OnInit {
  registros: EmployeeTracking[] = [];
  empleados: Empleado[] = [];

  constructor(
    private trackingService: EmployeeTrackingService,
    private empleadoService: EmpleadoService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.obtenerRegistros();
    this.obtenerEmpleados();
  }

  obtenerRegistros() {
    this.trackingService.obtenerRegistros().subscribe((data: EmployeeTracking[]) => {
      this.registros = data;
    });
  }

  obtenerEmpleados() {
    this.empleadoService.obtenerEmpleados().subscribe((data: Empleado[]) => {
      this.empleados = data;
    });
  }

  obtenerNombreEmpleado(empleadoId: string): string {
    const empleado = this.empleados.find(e => e.id === empleadoId);
    return empleado ? `${empleado.nombre} ${empleado.apellido}` : 'Desconocido';
  }

  eliminarRegistro(id: string) {
    this.trackingService.eliminarRegistro(id).subscribe(() => {
      this.registros = this.registros.filter(registro => registro.id !== id);
    });
  }

  volverAtras() {
    this.location.back();
  }
}
