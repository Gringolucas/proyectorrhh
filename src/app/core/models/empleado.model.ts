

  export interface IDEmpleado {
    id: string; 
  }

  export interface Empleado extends IDEmpleado{
    nombre: string;
    apellido: string;
    cuit: string;
    puesto: string;
    salario: number;
  }  

  export interface EmployeeTracking extends IDEmpleado{
    empleadoId: string;
    fecha: string;
    diasVacaciones: number;
    faltas: number;
    amonestaciones: number;
    horasExtras: number;
  }