import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingformsComponent } from './pricingforms.component';

describe('PricingformsComponent', () => {
  let component: PricingformsComponent;
  let fixture: ComponentFixture<PricingformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
