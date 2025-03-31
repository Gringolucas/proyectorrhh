import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})

export class EmpleadoComponent implements OnInit {
  empleadosForm!: FormGroup;  //define los campos del formulario
  empleados: any[] = []

  constructor(private empleadoService: EmpleadoService) {
    this.empleadosForm  = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      cuit:  new FormControl(''),
      puesto: new FormControl(''),
      salario: new FormControl('')
      });
    }

  /** Se ejecuta para cargar datos desde servicios. Se modifiico para que actualizar automaticamente*/
  ngOnInit(): void {
    this.empleadoService.obtenerEmpleados().subscribe(
      (data) => { this.empleados = data;
      console.log('Empleados cargados en el componente:', this.empleados); // Debugging
       }
    );
  }
  
  cargar(): void {
    console.log('Datos del formulario antes de enviar:', this.empleadosForm.value);

    const nuevoEmpleado = {
      id: Date.now(), // Generar un ID único basado en la fecha actual
      ...this.empleadosForm.value // Obtiene los valores del formulario
    };
    
    console.log('Nuevo empleado a agregar:', nuevoEmpleado); // Debugging

    // Llamamos al servicio para agregar el nuevo empleado
    this.empleadoService.registrarEmpleado(nuevoEmpleado);

    // Recargar lista de empleados
    this.empleadoService.obtenerEmpleados().subscribe(data => {
      this.empleados = data;
      console.log('Lista de empleados actualizada:', this.empleados); // Debugging
    });

  
    // Limpiar el formulario después de agregar un empleado
    this.empleadosForm.reset();
  }
  }
