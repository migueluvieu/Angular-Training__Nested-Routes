import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '@angular/material';
import { GreenModule } from './green/green.module';
import { BlueModule } from './blue/blue.module';
import { RedModule } from './red/red.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const routes: Routes = [
  // path default
  { path: '', pathMatch: 'full', redirectTo: 'blue' },

  { path: 'blue', loadChildren: 'app/blue/blue.module#BlueModule' },
  { path: 'red', loadChildren: 'app/red/red.module#RedModule' },
  { path: 'green', loadChildren: 'app/green/green.module#GreenModule' },
  // rutas parametrizadas, por ejemplo para indicar componente desde donde vino
  { path: 'blue/:from', loadChildren: 'app/blue/blue.module#BlueModule' },
  { path: 'red/:from', loadChildren: 'app/red/red.module#RedModule' },
  { path: 'green/:from', loadChildren: 'app/green/green.module#GreenModule' },
  // path not found
  { path: '**', component: NotFoundComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // módulo shared para módulos,componentes, providers,.. compartidos
    SharedModule,
    // para el el módulo raíz siempre se cargarán las rutas forRoot, en el resto de módulos será forChild
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    // algunos componentes de material utilizan transiciones de módulo de animaciones
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
