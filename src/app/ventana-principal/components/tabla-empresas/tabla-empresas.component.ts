import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from 'src/app/interfaces/main';
import { ListaEmpresaService } from 'src/app/services/lista-empresa.service';

@Component({
  selector: 'app-tabla-empresas',
  templateUrl: './tabla-empresas.component.html',
  styleUrls: ['./tabla-empresas.component.css']
})
export class TablaEmpresasComponent {

  //* Variables
  listaEmpresas: Empresa[] = [];

  displayedColumns: string[] = ['ID', 'NAME', 'PHONE', 'acciones'];

  dataSource!: MatTableDataSource<Empresa>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _listaEmpresaService: ListaEmpresaService) 
  {

  }

  ngOnInit() {
    this._listaEmpresaService.listDataEmpresa$.subscribe(( data: any) => {
      this.listaEmpresas = data;
      this.dataSource = new MatTableDataSource(this.listaEmpresas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this._listaEmpresaService.getListaEmpresa();
  }

  onEditEmpresa(){ //Abrir el dialog con los datos para editar

  }

  onDeleteEmpresa(){ //Realizar la eliminación de la empresa

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
