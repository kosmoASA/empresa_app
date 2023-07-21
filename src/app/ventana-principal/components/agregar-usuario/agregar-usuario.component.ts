import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/main';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {

//* Variables
form: FormGroup;


constructor (private fb: FormBuilder,
  private dialogRef: MatDialogRef<AgregarUsuarioComponent>)
{
  this.form = this.fb.group({
    NAME_USER: ['', [Validators.required]],
    SURNAME_USER: ['', [Validators.required]],
    ID_USER: ['', [Validators.required, Validators.minLength(1)]]
  })
}


agregarUsuario() {
  if(this.form.invalid) {
    return;
  }

  const dataUser : Usuario = {
    NAME_USER: this.form.value.NAME_USER,
    SURNAME_USER: this.form.value.SURNAME_USER,
    ID_USER: this.form.value.ID_USER,
  };

  this.dialogRef.close(dataUser);
}

}
