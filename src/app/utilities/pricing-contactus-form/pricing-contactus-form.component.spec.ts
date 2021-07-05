import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingContactusFormComponent } from './pricing-contactus-form.component';

describe('PricingContactusFormComponent', () => {
  let component: PricingContactusFormComponent;
  let fixture: ComponentFixture<PricingContactusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingContactusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingContactusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
