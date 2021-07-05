import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuberaPricingEnterpriseComponent } from './kubera-pricing-enterprise.component';

describe('KuberaPricingEnterpriseComponent', () => {
  let component: KuberaPricingEnterpriseComponent;
  let fixture: ComponentFixture<KuberaPricingEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuberaPricingEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuberaPricingEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
