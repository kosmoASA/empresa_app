import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//* Componentes
import { AppComponent } from './app.component';
//* Modulos

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { VentanaPrincipalComponent } from './ventana-principal/ventana-principal.component';
import { TablaEmpresasComponent } from './ventana-principal/components/tabla-empresas/tabla-empresas.component';
import { TablaUsuariosComponent } from './ventana-principal/components/tabla-usuarios/tabla-usuarios.component';
import { AgregarEmpresaComponent } from './ventana-principal/components/agregar-empresa/agregar-empresa.component';
import { AgregarUsuarioComponent } from './ventana-principal/components/agregar-usuario/agregar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    VentanaPrincipalComponent,
    TablaEmpresasComponent,
    TablaUsuariosComponent,
    AgregarEmpresaComponent,
    AgregarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
