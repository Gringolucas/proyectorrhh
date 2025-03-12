/** Este archivo define las rutas principales de la aplicación. Las rutas en Angular permiten navegar entre diferentes páginas sin recargar la aplicación. */

import { Routes } from '@angular/router';
import { DashboardPages } from './pages/dashboard-pages/dashboard-pages.component';
import { AuthPage } from './pages/auth-pages/auth-pages.component';
import { RegisterEmployeePage } from './pages/employees-pages/register-employee/register-employee.component';
import { EmployeeListPage } from './pages/employees-pages/employee-list/employee-list.component';
import { CompanyInfoPages } from './pages/company-info-pages/company-info-pages.component';
import { SettingsPages } from './pages/settings-pages/settings-pages.component';
import { ReportsPages } from './pages/reports-pages/reports-pages.component';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Página de inicio = Auth
  { path: 'auth', component: AuthPage },
  { path: 'dashboard', component: DashboardPages },
  { path: 'register-employee', component: RegisterEmployeePage },
  { path: 'employee-list', component: EmployeeListPage },
  { path: 'company-info', component: CompanyInfoPages , canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsPages , canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsPages, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'auth' } // Si no hay coincidencias, se va a 'auth'

];


