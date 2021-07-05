import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuberaPricingCloudComponent } from './kubera-pricing-cloud.component';

describe('KuberaPricingCloudComponent', () => {
  let component: KuberaPricingCloudComponent;
  let fixture: ComponentFixture<KuberaPricingCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuberaPricingCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuberaPricingCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
