import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'color-submenu',
  templateUrl: './submenu.component.html'
})
export class SubmenuComponent implements OnInit {
 @Input() component;

 public routesTo: Array<any> = [];

  constructor(private router: Router ) { }

  ngOnInit() {
    this.routesTo = [
        {path: '/red', color: 'red'},
        {path: '/blue', color: 'blue'},
        {path: '/green', color: 'green'}
   ];
}

  /**
  * Navegacion programática
  * @param {any} route
  * @memberOf RedComponent
  */
  navigateTo (route) {
    this.router.navigate([route, this.component]);
  }

}
