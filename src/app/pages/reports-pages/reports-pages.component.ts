import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeTrackingService } from '../../core/services/employee-tracking.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-reports-pages',
  imports: [NgFor],
  templateUrl: './reports-pages.component.html',
  styleUrl: './reports-pages.component.css'
})
export class ReportsPages implements OnInit {

  registros: any = [];

  constructor(private location: Location, private trackingService: EmployeeTrackingService ) {}

  ngOnInit() {
    this.registros = this.trackingService.obtenerRegistros();

  }


  volverAtras() {
    this.location.back();
  }

}
