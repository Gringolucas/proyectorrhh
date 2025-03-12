import { Component } from '@angular/core';
import { DashboardGridComponent } from '../../core/components/dashboard-component/dashboard-grid/dashboard-grid.component';
import { DashboardHeaderComponent } from '../../core/components/dashboard-component/dashboard-header/dashboard-header.component';

@Component({
  selector: 'app-dashboard-pages',
  imports: [DashboardGridComponent, DashboardHeaderComponent],
  templateUrl: './dashboard-pages.component.html',
  styleUrl: './dashboard-pages.component.css'
})
export class DashboardPages {

}
