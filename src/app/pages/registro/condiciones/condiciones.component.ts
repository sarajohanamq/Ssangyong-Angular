import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.component.html',
  styleUrls: ['./condiciones.component.css']
})
export class CondicionesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CondicionesComponent>) { }

  ngOnInit(): void {
  }
  cerrar(): void {
    this.dialogRef.close({
      opcion: "cerrar" 
    });
  } 
}
