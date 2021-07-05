import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadGetStartedComponent } from './workload-get-started.component';

describe('WorkloadGetStartedComponent', () => {
  let component: WorkloadGetStartedComponent;
  let fixture: ComponentFixture<WorkloadGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
