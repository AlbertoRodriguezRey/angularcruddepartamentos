import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details-component',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent implements OnInit {
  public departamento!: Departamento;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      let nombre = params['nombre'];
      let localidad = params['localidad'];

      this.departamento = new Departamento(id, nombre, localidad);
    })
  }
}
