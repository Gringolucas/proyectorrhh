import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings-pages',
  imports: [],
  templateUrl: './settings-pages.component.html',
  styleUrl: './settings-pages.component.css'
})
export class SettingsPages {

  constructor(private location: Location) {}

  volverAtras() {
    this.location.back();
  }

}
