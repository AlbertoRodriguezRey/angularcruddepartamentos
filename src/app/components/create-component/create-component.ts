import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-component',
  standalone: false,
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export class CreateComponent implements OnInit{
  @ViewChild("id") cajaId!: ElementRef;
  @ViewChild("nombre") cajaNombre!: ElementRef
  @ViewChild("localidad") cajaLocalidad!: ElementRef;

  constructor(private _service: ServiceDepartamentos,
    private _router: Router
  ) {}

  insertarDepartamento() {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let departamento = new Departamento(id, nombre, localidad);
    this._service.createDepartamento(departamento).subscribe(response => {
      this._router.navigate(["/home"]);
    })
  }



  ngOnInit(): void {
  }
}
