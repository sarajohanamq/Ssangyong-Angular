import { Cliente } from './../../_model/Cliente';
import { Locacion } from './../../_model/Locacion';
import { Ciudades } from './../../_model/Ciudades';
import { InformacionMarca } from './../../_model/InformacionMarca';
import { RegistroService } from './../../_service/registro.service';
import { Component, OnInit } from '@angular/core';
import { ValidacionesPersonalizadas } from 'src/app/_model/ValidacionesPersonalizadas';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Modelos } from 'src/app/_model/Modelos';
import { Portafolio } from 'src/app/_model/Portafolio';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formgroup: FormGroup;
  constructor(private _snackBar: MatSnackBar, private registroService:RegistroService) { }
  selected = 0;
  public modelo:Portafolio[];
  public ciudadesUser: Ciudades[];
  public departamentoUser: Locacion[];
  public registrar;
  public localizacionFinal;
  ciudadElegida=0;
  modeloElegido="";
  ngOnInit(): void {
    this.formgroup = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(4)]),
      tel: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      departamentoSelect: new FormControl('0',[Validators.required,Validators.min(1)]),
      ciudadSelect: new FormControl('0',[Validators.required,Validators.min(1)]),
      check: new FormControl('', [Validators.required,Validators.requiredTrue]),
    });
    this.registroService.getModelos().subscribe((data:InformacionMarca[]) => {
    this.modelo=data[1]['subitems'];
    }, err => {
        this._snackBar.open(err, 'Advertencia', {
        duration: 2000,
        });
    });
    this.registroService.getLocacion().subscribe((data:Locacion[]) => {
      this.departamentoUser=data;
    }, err => {
      this._snackBar.open(err['name'], 'Advertencia', {
      duration: 2000,
      });
    });
  }
  capturar(valor){
    this.selected=valor;
    if(this.selected!=0){
     
    this.registroService.getCiudad(this.selected).subscribe((data:Ciudades[]) => {
      this.ciudadesUser=data;
      
    }, err => {
      this._snackBar.open(err['name'], 'Advertencia', {
      duration: 2000,
      });
    });
  }
  }
  enviar(Event: Event):any{
    Event.preventDefault();

    this.registrar = {
      nombre:this.formgroup.value['name'],
      email:this.formgroup.value['email'],
      telefono:this.formgroup.value['tel'],
      localizacion_user: "[{'idDepartamento':"+this.selected+",'idCiudad':"+this.ciudadElegida+"}]",
      modelo:this.modeloElegido,
    };
   
    this.registroService.postRegistro(this.registrar).subscribe(data => {
      this._snackBar.open('Solicitud Enviada', 'Advertencia', {
        duration: 1000,
      });
    }, err => {
      if (err.status == 400) {
        this._snackBar.open('Ya realizo una solictud el dia hoy con el mismo correo', 'Advertrencia', {
        duration: 2000,
        });
      }else{
        this._snackBar.open(err['name'], 'Advertencia', {
        duration: 2000,
        });
      }
    });
  }
}
