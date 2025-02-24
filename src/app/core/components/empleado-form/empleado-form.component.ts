import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'node:crypto';


@Component({
  selector: 'app-empleado',
  templateUrl: 'empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})

export class EmpleadoComponent implements OnInit {
  empleadosForm!: FormGroup;  //define los campos del formulario
    nombre: FormControl;
    apellido: FormControl;
    cuit: FormControl;
    puesto: FormControl;
    salario: FormControl

    constructor() {
      this.nombre = new FormControl('');
      this.apellido = new FormControl('');
      this.cuit = new FormControl('');
      this.puesto = new FormControl('');
      this.salario = new FormControl('');

      this.empleadosForm!  = new FormGroup({
        nombre: this.nombre,
        apellido: this.apellido,
        cuit: this.cuit,
        puesto: this.puesto,
        salario: this.salario
      })
    }
  };

  constructor(private empleadoService: EmpleadoService) {
    this.empleadosForm! = this.empleadoService.crearEmpleadoVacio();
  }

  ngOnInit(): void {
    this.empleados = this.empleadoService.obtenerEmpleados();
  }
  
}

