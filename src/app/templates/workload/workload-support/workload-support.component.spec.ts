import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadSupportComponent } from './workload-support.component';

describe('WorkloadSupportComponent', () => {
  let component: WorkloadSupportComponent;
  let fixture: ComponentFixture<WorkloadSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
