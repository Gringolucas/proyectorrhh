/** La propiedad canActivate se usa en Angular para proteger rutas 
 * y asegurarse de que el usuario cumpla ciertas condiciones antes de acceder a una página. */

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('user'); // Verifica si hay usuario autenticado
    if (!isLoggedIn) {
      this.router.navigate(['/auth']); // Redirige a la página de autenticación
      return false;
    }
    return true;
  }
}
