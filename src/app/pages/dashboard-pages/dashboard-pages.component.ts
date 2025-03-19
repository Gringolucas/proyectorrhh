import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard-pages',
  templateUrl: './dashboard-pages.component.html',
  styleUrl: './dashboard-pages.component.css',
  imports: [
    CommonModule,
    RouterModule // 🔹 Asegurar que está importado
  ]
})
export class DashboardPages {

}
