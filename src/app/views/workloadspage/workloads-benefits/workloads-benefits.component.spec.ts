import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsBenefitsComponent } from './workloads-benefits.component';

describe('WorkloadsBenefitsComponent', () => {
  let component: WorkloadsBenefitsComponent;
  let fixture: ComponentFixture<WorkloadsBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
