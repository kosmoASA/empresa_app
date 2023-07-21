import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../interfaces/main';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  private ListDataUsuario = new BehaviorSubject<any>([]);
  public listDataUsuario$ = this.ListDataUsuario.asObservable();

  getListaUsuarios() {
    this.ListDataUsuario.next(this.lista_Usuarios);
  }

  lista_Usuarios: Usuario[] = [
    {ID_USER: '1', NAME_USER: 'Steven', SURNAME_USER: 'Angel'},
    {ID_USER: '2', NAME_USER: 'Mayra', SURNAME_USER: 'Sierra'},
    {ID_USER: '3', NAME_USER: 'Nicolas', SURNAME_USER: 'Barbetti'},
    {ID_USER: '4', NAME_USER: 'Omar', SURNAME_USER: 'Urrego'},
    {ID_USER: '5', NAME_USER: 'Cristian', SURNAME_USER: 'Duque'},
    {ID_USER: '6', NAME_USER: 'Wilson', SURNAME_USER: 'Beltrán'},
    {ID_USER: '7', NAME_USER: 'Santiago', SURNAME_USER: 'Beltran'},
    {ID_USER: '8', NAME_USER: 'Marcela', SURNAME_USER: 'Orozco'},
    {ID_USER: '9', NAME_USER: 'Viviana', SURNAME_USER: 'Orozco'}
  ];



}
