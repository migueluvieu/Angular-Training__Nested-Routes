import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorFromComponent } from './components/color-from/color-from.component';
import { SubmenuComponent } from './components/submenu/submenu.component';

/**
 * Módulo compartido que contendrá otros módulos, componentes, providers,...
 * comunes al resto de módulos
 * @export CommonModule, ColorFromComponent]
 * @class SharedModule
 */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColorFromComponent, SubmenuComponent],
  // módulos, componentes,..visibles fuera de shared
  exports: [CommonModule, ColorFromComponent, SubmenuComponent]
})
export class SharedModule { }
