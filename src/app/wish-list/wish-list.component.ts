import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../animations';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  animations: [routeAnimation]
})
export class WishListComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
  }

}
