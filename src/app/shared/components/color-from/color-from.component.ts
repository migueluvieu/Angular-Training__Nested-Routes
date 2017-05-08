import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'color-from',
  templateUrl: './color-from.component.html'
})
export class ColorFromComponent implements AfterViewInit {
  // parámetro de entrada al componente
  @Input() param;
  paramExist: boolean;
  blueComponent = 'BlueComponent';
  greenComponent = 'GreenComponent';
  redComponent = 'RedComponent';
  sidemenu = 'sidemenu';

  constructor() { }
  // Hook del lifecycle de angular que detecta cuando hay cambios en el componente
  ngAfterViewInit() {
    this.paramExist = this.param !== '';
  }

}
