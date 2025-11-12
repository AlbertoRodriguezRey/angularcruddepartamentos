import { Component, viewChild, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit-component',
  standalone: false,
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export class EditComponent implements OnInit {
  public departamento!: Departamento;
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _activeRouter: ActivatedRoute,
    private _service: ServiceDepartamentos,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this._service.findDepartamento(id).subscribe(response => {
        this.departamento = response;
      })
    })
  }
  
  updateDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let editDepartamento = new Departamento(id, nombre, localidad);

    this._service.updateDepartamento(editDepartamento).subscribe(response => {
      this._router.navigate(["/home"]);
    });
  }
}
