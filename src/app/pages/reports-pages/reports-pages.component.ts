import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reports-pages',
  imports: [],
  templateUrl: './reports-pages.component.html',
  styleUrl: './reports-pages.component.css'
})
export class ReportsPages {

  constructor(private location: Location) {}

  volverAtras() {
    this.location.back();
  }

}
