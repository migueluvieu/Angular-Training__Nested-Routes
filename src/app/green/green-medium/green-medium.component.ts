import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-green-medium',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class GreenMediumComponent implements OnInit {

  public store: ISubColor = {
    color: 'green',
    component: 'GreenMediumComponent'
  };

  constructor() { }

  ngOnInit() {}

}
