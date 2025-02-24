import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  empresa = {
    nombre: 'Empresa XYZ',
    descripcion: 'Lideramos el sector de Recursos Humanos con soluciones innovadoras.',
    vision: 'Ser la empresa referente en gestión de talento.',
    mision: 'Brindar herramientas que potencien a los profesionales.'
  };

  contacto = {
    email: 'contacto@empresaxyz.com',
    telefono: '+54 11 2345 6789',
    direccion: 'Av. Principal 123, Buenos Aires, Argentina'
  };
}
