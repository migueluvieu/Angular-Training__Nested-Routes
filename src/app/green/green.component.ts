import { IColor } from './../model/IColor';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'color-green',
  templateUrl: '../shared/templates/color.component.html'
})
export class GreenComponent implements OnInit {

  public store: IColor = {
    paramFrom: '',
    paramExist: false,
    colorLight: 'green-light',
    colorMedium: 'green',
    colorDark: 'green-dark',
    component: 'GreenComponent'
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
