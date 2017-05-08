import { IColor } from './../model/IColor';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'color-blue',
  templateUrl: '../shared/templates/color.component.html'
})
export class BlueComponent implements OnInit {

  public store: IColor = {
    paramFrom: '',
    paramExist: false,
    colorLight: 'blue-light',
    colorMedium: 'blue',
    colorDark: 'blue-dark',
    component: 'BlueComponent'
  };


  constructor(private activatedRoute: ActivatedRoute ) { }

   ngOnInit() {
    const parametros$: Observable<any> = this.activatedRoute.params;
    parametros$.subscribe(parametros => {
      this.store.paramFrom = parametros['from'] || '';
      this.store.paramExist = this.store.paramFrom !== '';
    });
  }

}
