import { IColor } from './../model/IColor';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'color-red',
  templateUrl: '../shared/templates/color.component.html'
})
export class RedComponent implements OnInit {

  public store: IColor = {
    paramFrom: '',
    paramExist: false,
    colorLight: 'red-light',
    colorMedium: 'red',
    colorDark: 'red-dark',
    component: 'RedComponent'
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
