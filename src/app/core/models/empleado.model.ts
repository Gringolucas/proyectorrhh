export interface Empleado {
    id?: string;
    nombre: string;
    apellido: string;
    cuit: string;
    puesto: string;
    salario: number;
  }  

  export interface EmployeeTracking {
    id: string;
    empleadoId: string;
    fecha: string;
    diasVacaciones: number;
    faltas: number;
    amonestaciones: number;
    horasExtras: number;
  }
