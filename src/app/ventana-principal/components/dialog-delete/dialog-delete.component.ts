import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpresaToDelete, UsuarioToDelete } from 'src/app/interfaces/main';
import { ListaEmpresaService } from 'src/app/services/lista-empresa.service';
import { ListaUsuariosService } from 'src/app/services/lista-usuarios.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {


  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>) 
  {

  }
 
  
  onDeleteButton() {
    this.dialogRef.close(true);
  }

  noDelete() {
    this.dialogRef.close(false);
  }
}
