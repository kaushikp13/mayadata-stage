import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KubeconSwagTermsAndConditionsComponent } from './kubecon-swag-terms-and-conditions.component';

describe('KubeconSwagTermsAndConditionsComponent', () => {
  let component: KubeconSwagTermsAndConditionsComponent;
  let fixture: ComponentFixture<KubeconSwagTermsAndConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KubeconSwagTermsAndConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KubeconSwagTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
