import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarEmpresaComponent } from './components/agregar-empresa/agregar-empresa.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { ListaEmpresaService } from '../services/lista-empresa.service';
import { Empresa } from '../interfaces/main';

@Component({
  selector: 'app-ventana-principal',
  templateUrl: './ventana-principal.component.html',
  styleUrls: ['./ventana-principal.component.css']
})
export class VentanaPrincipalComponent {

constructor (public dialog: MatDialog,
             private _listaEmpresaService: ListaEmpresaService) 
{

}
  onAgregarEmpresa(){ // Abre el modal para agregar empresa
    const dialogRef = this.dialog.open(AgregarEmpresaComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((dataEmpresa: Empresa) => {
      console.log(dataEmpresa);
      this._listaEmpresaService.addEmpresa(dataEmpresa);
      this._listaEmpresaService.getListaEmpresa();

    });
  }

  onAgregarUsuario(){ // Abre el modal para agregar usuario
    const dialogRef = this.dialog.open(AgregarUsuarioComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
