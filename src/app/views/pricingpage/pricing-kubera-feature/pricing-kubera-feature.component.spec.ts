import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingKuberaFeatureComponent } from './pricing-kubera-feature.component';

describe('PricingKuberaFeatureComponent', () => {
  let component: PricingKuberaFeatureComponent;
  let fixture: ComponentFixture<PricingKuberaFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingKuberaFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingKuberaFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
