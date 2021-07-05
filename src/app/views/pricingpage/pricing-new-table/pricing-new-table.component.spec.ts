import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingNewTableComponent } from './pricing-new-table.component';

describe('PricingNewTableComponent', () => {
  let component: PricingNewTableComponent;
  let fixture: ComponentFixture<PricingNewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingNewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingNewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
