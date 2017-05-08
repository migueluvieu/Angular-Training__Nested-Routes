import { ISubColor } from './../../model/IColor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-red-dark',
  templateUrl: '../../shared/templates/sub-color.component.html'
})
export class RedDarkComponent implements OnInit {

 public store: ISubColor = {
    color: 'red-dark',
    component: 'RedDarkComponent'
  };

 constructor() { }

  ngOnInit() {}

}
