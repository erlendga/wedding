import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalProcessionComponent } from './bridal-procession.component';

describe('BridalProcessionComponent', () => {
  let component: BridalProcessionComponent;
  let fixture: ComponentFixture<BridalProcessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridalProcessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridalProcessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
