import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/main';
import { ListaUsuariosService } from 'src/app/services/lista-usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {

  
  //* Variables
  listaUsuarios: Usuario[] = [];

  displayedColumns: string[] = ['ID', 'NAME', 'SURNAME', 'acciones'];

  dataSource!: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _listaUsuariosService: ListaUsuariosService)
  {

  }

  ngOnInit() {
    this._listaUsuariosService.listDataUsuario$.subscribe((data: any) => {
      this.listaUsuarios = data;
      this.dataSource = new MatTableDataSource(this.listaUsuarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this._listaUsuariosService.getListaUsuarios();

  }




  
  onEditUser() {
    
  }
  
  onDeleteUser(){

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
