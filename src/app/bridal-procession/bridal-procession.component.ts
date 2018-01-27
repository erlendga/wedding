import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../animations';

@Component({
  selector: 'app-bridal-procession',
  templateUrl: './bridal-procession.component.html',
  styleUrls: ['./bridal-procession.component.scss'],
  animations: [routeAnimation]
})
export class BridalProcessionComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
