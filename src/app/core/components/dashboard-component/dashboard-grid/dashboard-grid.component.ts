import { Component } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard-grid',
  imports: [DashboardCardComponent],
  templateUrl: './dashboard-grid.component.html',
  styleUrl: './dashboard-grid.component.css'
})
export class DashboardGridComponent {
  cards = [
    { title: 'Empleados', description: 'Gestión de empleados', icon: '👥', route: '/employees' },
    { title: 'Nómina', description: 'Administrar pagos y sueldos', icon: '💰', route: '/payroll' },
    { title: 'Desempeño', description: 'Evaluaciones y objetivos', icon: '📈', route: '/performance' },
    { title: 'Asistencia', description: 'Control de horarios', icon: '🕒', route: '/attendance' },
    { title: 'Comunicaciones', description: 'Gestión de anuncios', icon: '📢', route: '/communications' }
  ];

}
