import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-blue-medium',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class BlueMediumComponent implements OnInit {

  public store: ISubColor = {
    color: 'blue',
    component: 'BlueMediumComponent'
  };

  constructor() { }

  ngOnInit() {}

}
