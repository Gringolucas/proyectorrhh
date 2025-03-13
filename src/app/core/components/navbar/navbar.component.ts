import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Nos permite hacer navegaciones programáticas.
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, FormsModule]
})
export class NavbarComponent implements OnInit {
  menuOpen = false;  // Controla si el menú de navegación está abierto o cerrado.
  userMenuOpen = false; //Indica si el menú de usuario (donde está "Perfil", "Ajustes" y "Cerrar sesión") está visible o no.
  userEmail: string = 'Usuario'; // Obtiene el nombre de usuario
  searchTerm = '';  // Almacena lo que el usuario escribe en la barra de búsqueda.

  constructor(private router: Router) {}  // permite redireccionar páginas con this.router.navigate(['/ruta']).

  ngOnInit() {
    this.userEmail = localStorage.getItem('user') || 'Usuario';
  }

  logout() {
    localStorage.removeItem('user');
    // Redirigir al login si es necesario
  }
  // Método para mostrar/ocultar el menú en móviles
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  // Método para mostrar/ocultar el menú del usuario
  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }


  // Método para buscar empleados
  search() {
    this.router.navigate(['/employee-list'], { queryParams: { q: this.searchTerm } });
  }
  // Usa queryParams ({ q: this.searchTerm }) para que en employee-list.component.ts se pueda recuperar el valor y filtrar los empleados.
}
