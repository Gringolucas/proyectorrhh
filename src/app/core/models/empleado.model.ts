

  export interface IDEmpleado {
    id: string; 
  }

  export interface Empleado extends IDEmpleado{
    firstName: string;
    lastName: string;
    cuit: string;
    position: string;
    salary: number;
  }  

  export interface EmployeeTracking extends IDEmpleado{
    empleadoId: string;
    nombre: string;
    apellido: string;
    fecha: string;
    diasVacaciones: number;
    faltas: number;
    amonestaciones: number;
    horasExtras: number;
  }