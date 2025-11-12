import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit{
  public departamentos!: Array<Departamento>;
  constructor(private _service: ServiceDepartamentos) {}

  loadDepartamento(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    });
  }


  ngOnInit(): void {
    this.loadDepartamento();
  }

  confirmDelete(idDepartamento: number): void {
    Swal.fire({
      title: '¿Eliminar departamento?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      focusCancel: true
    }).then(result => {
      if (result.isConfirmed) {
        // muestra spinner mientras se realiza la petición
        Swal.fire({
          title: 'Eliminando...',
          didOpen: () => {
            Swal.showLoading();
          },
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false
        });
        this.deleteDepartamento(idDepartamento);
      }
    });
  }

  // si quieres feedback después del borrado, modifica deleteDepartamento así:
  deleteDepartamento(idDepartamento: number): void {
    const departamentoToDelete = new Departamento(idDepartamento, "", "");
    this._service.deleteDepartamento(departamentoToDelete).subscribe({
      next: () => {
        this.loadDepartamento();
        Swal.fire('Eliminado', 'El departamento ha sido eliminado.', 'success');
      },
      error: (err) => {
        console.error(err);
        Swal.fire('Error', 'No se pudo eliminar el departamento.', 'error');
      }
    });
  }
}
