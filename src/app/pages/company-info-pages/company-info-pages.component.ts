import { Component } from '@angular/core';
import { HomeComponent } from '../../core/components/home/home.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-company-info-pages',
  imports: [HomeComponent],
  templateUrl: './company-info-pages.component.html',
  styleUrl: './company-info-pages.component.css'
})
export class CompanyInfoPages {

  constructor (private location: Location) {}
  
  volverAtras() {
    this.location.back();
  }

}
