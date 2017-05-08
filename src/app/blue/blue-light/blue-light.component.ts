import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-blue-light',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class BlueLightComponent implements OnInit {

  public store: ISubColor = {
    color: 'blue-light',
    component: 'BlueLightComponent'
  };

  constructor() { }

  ngOnInit() {}
}
