import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperscaleComponent } from './hyperscale.component';

describe('HyperscaleComponent', () => {
  let component: HyperscaleComponent;
  let fixture: ComponentFixture<HyperscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
