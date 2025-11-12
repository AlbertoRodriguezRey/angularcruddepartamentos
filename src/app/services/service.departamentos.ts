import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient) {}

    createDepartamento(departamento: Departamento): Observable<any> {
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request;
        return this._http.post(url, json, { headers: header });
    }

    getDepartamentos(): Observable<Array<Departamento>> {
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request;

        return this._http.get<Array<Departamento>>(url);
    }
}