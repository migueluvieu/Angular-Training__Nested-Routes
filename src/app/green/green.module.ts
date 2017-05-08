import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { GreenComponent } from './green.component';
import { Routes, RouterModule } from '@angular/router';
import { GreenDarkComponent } from './green-dark/green-dark.component';
import { GreenMediumComponent } from './green-medium/green-medium.component';
import { GreenLightComponent } from './green-light/green-light.component';

const routes: Routes = [
  {
     // Los componentes contenedores (GreenComponent) necesitan tener un router-outlet para cargar sus hijos
     path: '', component: GreenComponent, // tiene sus cosas y ... un router-oulet para sus hijos
     children: [
       // los componentes de las rutas hijas se renderizarán en el router-outlet definido siempre en el componente contenedor
        { path: 'light', component: GreenLightComponent },
        { path: 'medium', component: GreenMediumComponent },
        { path: 'dark', component: GreenDarkComponent },
        // cuando pongan en el navegador pongan localhost:8080/green/ cargará el GreenComponent ya que así se lo indicamos
        // y en su router-routlet renderizará el dark, ya que con el path '' redireccionamos a /green/dark
        { path: '', redirectTo: 'dark', pathMatch: 'full'}
     ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    // las rutas en los módulos NO Raíz se cargan forChild
     RouterModule.forChild(routes)
  ],
  declarations: [GreenComponent, GreenDarkComponent, GreenLightComponent, GreenMediumComponent]
})
export class GreenModule { }
