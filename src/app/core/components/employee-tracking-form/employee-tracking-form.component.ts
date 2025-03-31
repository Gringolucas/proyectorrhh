import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
// import { FormsModule } from '@angular/forms';
import { EmployeeTracking } from '../../models/empleado.model';
import { Empleado } from '../../models/empleado.model';
import { EmployeeTrackingService } from '../../services/employee-tracking.service';
import { EmpleadoService } from '../../services/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-employee-tracking-form',
  templateUrl: './employee-tracking-form.component.html',
  styleUrls: ['./employee-tracking-form.component.css'],
  imports: [CommonModule]
})

export class EmployeeTrackingFormComponent implements OnInit {
  employees: Empleado[] = [];
  records: EmployeeTracking[] = [];
  nuevoRegistro: EmployeeTracking = this.resetRegistro();


  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private trackingService: EmployeeTrackingService
  ) {
    this.trackingForm = this.fb.group({
      empleadoId: ['', Validators.required],
      date: ['', Validators.required],
      vacationDays: [0],
      absences: [0],
      warnings: [0],
      extraHours: [0]
    });
  }

  ngOnInit() {
    // 🔹 Suscribirse al Observable para obtener los empleados correctamente
    this.empleadoService.obtenerEmpleados().subscribe((data: Empleado[]) => {
      this.employees = data;
    });

    this.trackingService.obtenerRegistros().subscribe((data: EmployeeTracking[]) => {
      this.records = data;
    });
  }

  registrarDatos(): void {
    if (!this.nuevoRegistro.empleadoId) {
      alert('Debe seleccionar un empleado');
      return;
    }

    // Genera ID unico y fecha actual
    const empleado = this.employees.find(e => e.id === this.nuevoRegistro.empleadoId);
    if (!empleado) return;

    this.nuevoRegistro.id = uuidv4();
    this.nuevoRegistro.fecha = new Date().toISOString().split('T')[0];
    this.nuevoRegistro.nombre = empleado.firstName || '';
    this.nuevoRegistro.apellido = empleado.lastName || '';

    this.trackingService.registrarDatos(this.nuevoRegistro).subscribe(() => {
      alert('Datos registrados correctamente');
      this.records.push({ ...this.nuevoRegistro });
      this.nuevoRegistro = this.resetRegistro();
    });
  }

  eliminarRegistro(id: string): void {
    this.records = this.records.filter(r => r.id !== id);
    this.trackingService.eliminarRegistro(id);
  }

  editRecord(record: EmployeeTracking): void {
    this.nuevoRegistro = { ...record }; // Clona el registro para editarlo
  }
  
  deleteRecord(id: string): void {
    this.trackingService.eliminarRegistro(id).subscribe(() => {
      this.records = this.records.filter(r => r.id !== id);
    });
  }
  
  getEmployeeName(id: string): string {
    const empleado = this.employees.find(e => e.id === id);
    return empleado ? `${empleado.firstName} ${empleado.lastName}` : 'Desconocido';
  }

  // 🔹 Resetear el formulario después del registro
  resetRegistro(): EmployeeTracking {
    return {
      id: '',
      nombre: '',
      apellido: '',
      empleadoId: '',
      fecha: '',
      diasVacaciones: 0,
      faltas: 0,
      amonestaciones: 0,
      horasExtras: 0,
      };
    };
  }



