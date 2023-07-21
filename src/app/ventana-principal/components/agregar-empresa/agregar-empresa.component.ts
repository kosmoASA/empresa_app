import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Empresa } from 'src/app/interfaces/main';

@Component({
  selector: 'app-agregar-empresa',
  templateUrl: './agregar-empresa.component.html',
  styleUrls: ['./agregar-empresa.component.css']
})
export class AgregarEmpresaComponent {

  //* Variables

  form: FormGroup;
  patternPhone = "[0-9]{3}-[0-9]{3}-[0-9]{4}";


  constructor (private fb: FormBuilder,
               private dialogRef: MatDialogRef<AgregarEmpresaComponent>)
  {
    this.form = this.fb.group({
      NAME_EMPRESA: ['', [Validators.required]],
      ID_EMPRESA: ['', [Validators.required, Validators.minLength(1)]],
      PHONE_EMPRESA: ['', [Validators.required, Validators.pattern(this.patternPhone)]]
    })
  }



  agregarEmpresa(){

    if(this.form.invalid) {
      return;
    }

    const dataEmpresa : Empresa = {
      NAME_EMPRESA: this.form.value.NAME_EMPRESA,
      ID_EMPRESA: this.form.value.ID_EMPRESA,
      PHONE_EMPRESA: this.form.value.PHONE_EMPRESA,
    };

    this.dialogRef.close(dataEmpresa);
    
  }
}
