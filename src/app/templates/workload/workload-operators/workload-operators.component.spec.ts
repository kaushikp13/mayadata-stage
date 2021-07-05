import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadOperatorsComponent } from './workload-operators.component';

describe('WorkloadOperatorsComponent', () => {
  let component: WorkloadOperatorsComponent;
  let fixture: ComponentFixture<WorkloadOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
