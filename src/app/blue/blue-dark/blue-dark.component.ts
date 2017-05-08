import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-blue-dark',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class BlueDarkComponent implements OnInit {

  public store: ISubColor = {
    color: 'blue-dark',
    component: 'BlueDarkComponent'
  };

  constructor() { }

  ngOnInit() {
  }

}
