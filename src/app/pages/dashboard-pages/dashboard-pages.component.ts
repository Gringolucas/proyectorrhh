import { Component } from '@angular/core';
// import { DashboardGridComponent } from '../../core/components/dashboard-component/dashboard-grid/dashboard-grid.component';
// import { DashboardHeaderComponent } from '../../core/components/dashboard-component/dashboard-header/dashboard-header.component';
import { DashboardCardComponent } from '../../core/components/dashboard-component/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard-pages',
  imports: [DashboardCardComponent],
  templateUrl: './dashboard-pages.component.html',
  styleUrl: './dashboard-pages.component.css'
})
export class DashboardPages {

}
