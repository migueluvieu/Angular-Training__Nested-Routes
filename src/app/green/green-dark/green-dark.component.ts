import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-green-dark',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class GreenDarkComponent implements OnInit {

  public store: ISubColor = {
    color: 'green-dark',
    component: 'GreenDarkComponent'
  };

  constructor() { }

  ngOnInit() {}

}
