import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadBenefitsComponent } from './workload-benefits.component';

describe('WorkloadBenefitsComponent', () => {
  let component: WorkloadBenefitsComponent;
  let fixture: ComponentFixture<WorkloadBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
