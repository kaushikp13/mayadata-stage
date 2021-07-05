import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuberaPricingComponent } from './kubera-pricing.component';

describe('KuberaPricingComponent', () => {
  let component: KuberaPricingComponent;
  let fixture: ComponentFixture<KuberaPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuberaPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuberaPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
