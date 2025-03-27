import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Importamos NgIf
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'proyectorrhh';
  isLoggedIn = false;

  constructor(private router: Router) {
    if (typeof window !== 'undefined' && localStorage) {
      this.isLoggedIn = !!localStorage.getItem('user'); // Verifica si hay un usuario autenticado
    }

  }

  esRutaAuth(): boolean {
    return this.router.url.startsWith('/auth');
  }
  
}

