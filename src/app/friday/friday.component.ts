import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../animations';

@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['./friday.component.scss'],
  animations: [routeAnimation]
})
export class FridayComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

}
