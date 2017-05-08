import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedComponent } from './red.component';
import { RedDarkComponent } from './red-dark/red-dark.component';
import { RedMediumComponent } from './red-medium/red-medium.component';
import { RedLightComponent } from './red-light/red-light.component';

const routes: Routes = [
  {
    // Los componentes contenedores (RedComponent) necesitan tener un router-outlet para cargar sus hijos
     path: '', component: RedComponent,
     children: [
        // los componentes de las rutas hijas se renderizarán en el router-outlet definido siempre en el componente contenedor
        { path: 'light', component: RedLightComponent },
        { path: 'medium', component: RedMediumComponent },
        { path: 'dark', component: RedDarkComponent },
        // cuando pongan en el navegador pongan localhost:8080/red/ cargará el RedComponent ya que así lo mapeamos con el path ''
        // y en su router-routlet renderizará el dark, ya que con el path '' redireccionamos a /red/dark
        { path: '', redirectTo: 'dark', pathMatch: 'full'}
     ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    // las rutas en los módulos NO Raíz se cargan .forChild
     RouterModule.forChild(routes),
  ],
  declarations: [RedComponent, RedDarkComponent, RedMediumComponent, RedLightComponent]
})
export class RedModule { }
