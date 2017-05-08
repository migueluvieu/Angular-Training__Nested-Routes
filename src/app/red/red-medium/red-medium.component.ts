import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-red-medium',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class RedMediumComponent implements OnInit {

  public store: ISubColor = {
    color: 'red',
    component: 'RedMediumComponent'
  };

  constructor() { }

  ngOnInit() {}

}
