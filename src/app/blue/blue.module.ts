import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BlueComponent } from './blue.component';
import { Routes, RouterModule } from '@angular/router';
import { BlueLightComponent } from './blue-light/blue-light.component';
import { BlueMediumComponent } from './blue-medium/blue-medium.component';
import { BlueDarkComponent } from './blue-dark/blue-dark.component';

const routes: Routes = [
  {
     // Los componentes contenedores (BlueComponent) necesitan tener un router-outlet para cargar sus hijos
     path: '', component: BlueComponent,
     children: [
       // los componentes de las rutas hijas se renderizarán en el router-outlet definido siempre en el componente contenedor
        { path: 'light', component: BlueLightComponent },
        { path: 'medium', component: BlueMediumComponent },
        { path: 'dark', component: BlueDarkComponent },
        // cuando pongan en el navegador pongan localhost:8080/blue/ cargará el BlueComponent ya que así lo mapeamos con el path ''
        // y en su router-routlet renderizará el dark, ya que con el path '' redireccionamos a /blue/dark
        { path: '', redirectTo: 'dark', pathMatch: 'full'}
     ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    // las rutas en los módulos NO Raíz se cargan forChild
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [BlueComponent, BlueLightComponent, BlueMediumComponent, BlueDarkComponent]
})
export class BlueModule { }
