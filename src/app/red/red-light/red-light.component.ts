import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-red-light',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class RedLightComponent implements OnInit {

  public store: ISubColor = {
    color: 'red-light',
    component: 'RedLightComponent'
  };

  constructor() { }

  ngOnInit() { }

}
