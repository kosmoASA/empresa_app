import { Injectable } from '@angular/core';
import { Empresa } from '../interfaces/main';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaEmpresaService {

  private ListDataEmpresa = new BehaviorSubject<any>([]);
  public listDataEmpresa$ = this.ListDataEmpresa.asObservable();

  getListaEmpresa() {
    this.ListDataEmpresa.next(this.lista_Empresa);
  }

  lista_Empresa: Empresa[] = [
    {ID_EMPRESA: 1, NAME_EMPRESA: 'Hydrogen Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 2, NAME_EMPRESA: 'Helium Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 3, NAME_EMPRESA: 'Lithium Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 4, NAME_EMPRESA: 'Beryllium Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 5, NAME_EMPRESA: 'Boron Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 6, NAME_EMPRESA: 'Carbon Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 7, NAME_EMPRESA: 'Nitrogen Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 8, NAME_EMPRESA: 'Oxygen Bussiness', PHONE_EMPRESA: '3175031786'},
    {ID_EMPRESA: 9, NAME_EMPRESA: 'Fluorine Bussiness', PHONE_EMPRESA: '3175031786'}
  ];


}
