import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuberaPricingModelsComponent } from './kubera-pricing-models.component';

describe('KuberaPricingModelsComponent', () => {
  let component: KuberaPricingModelsComponent;
  let fixture: ComponentFixture<KuberaPricingModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuberaPricingModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuberaPricingModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
