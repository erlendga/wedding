import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../animations';

@Component({
  selector: 'app-saturday',
  templateUrl: './saturday.component.html',
  styleUrls: ['./saturday.component.scss'],
  animations: [routeAnimation]
})
export class SaturdayComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });    
  }

}
