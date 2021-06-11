import { InformacionMarca } from './../_model/InformacionMarca';
import { Ciudades } from './../_model/Ciudades';
import { Cliente } from './../_model/Cliente';
import { Locacion } from './../_model/Locacion';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private url: string = `${environment.HOST}registro/`;
  public Recargarsolicitud = new Subject<string>();
  constructor(private http: HttpClient) { }

  getLocacion(){
    return this.http.get<Locacion[]>(this.url + "GetDepartamento" );
  }
  getCiudad(id:number){
    return this.http.get<Ciudades[]>(this.url + "GetCiudad/"+id);
  }
  postRegistro(registroCliente:Cliente){
    console.log(registroCliente);
    return this.http.post<Locacion[]>(this.url + "InsertarRegistro",registroCliente);
  }
  getModelos(){
    return this.http.get<InformacionMarca[]>("https://integrador.processoft.com.co/api/menutest");
  }

}
