import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeTracking } from '../../models/empleado.model';
import { Empleado } from '../../models/empleado.model';
import { EmployeeTrackingService } from '../../services/employee-tracking.service';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-employee-tracking-form',
  templateUrl: './employee-tracking-form.component.html',
  styleUrls: ['./employee-tracking-form.component.css'],
  imports: [FormsModule]
})
export class EmployeeTrackingFormComponent implements OnInit {
  empleados: Empleado[] = [];
  nuevoRegistro: EmployeeTracking = {
    id: '',
    empleadoId: '',
    fecha: '',
    diasVacaciones: 0,
    faltas: 0,
    amonestaciones: 0,
    horasExtras: 0,
  };

  constructor(
    private empleadoService: EmpleadoService,
    private trackingService: EmployeeTrackingService
  ) {}

  ngOnInit() {
    // 🔹 Suscribirse al Observable para obtener los empleados correctamente
    this.empleadoService.obtenerEmpleados().subscribe((data: Empleado[]) => {
      this.empleados = data;
    });
  }

  registrarDatos() {
    if (!this.nuevoRegistro.empleadoId) {
      alert('Debe seleccionar un empleado');
      return;
    }

    // 🔹 Generar un ID único y asignar la fecha actual si no está definida
    this.nuevoRegistro.id = new Date().getTime().toString();
    if (!this.nuevoRegistro.fecha) {
      this.nuevoRegistro.fecha = new Date().toISOString().split('T')[0];
    }

    this.trackingService.registrarDatos(this.nuevoRegistro).subscribe(() => {
      alert('Datos registrados correctamente');

      // 🔹 Resetear el formulario después del registro
      this.nuevoRegistro = {
        id: '',
        empleadoId: '',
        fecha: '',
        diasVacaciones: 0,
        faltas: 0,
        amonestaciones: 0,
        horasExtras: 0,
      };
    });
  }
}



