import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-green-light',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class GreenLightComponent implements OnInit {

  public store: ISubColor = {
    color: 'green-light',
    component: 'GreenLightComponent'
  };

  constructor() {}

  ngOnInit() {}


}
