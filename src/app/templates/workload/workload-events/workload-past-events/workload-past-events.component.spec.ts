import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadPastEventsComponent } from './workload-past-events.component';

describe('WorkloadPastEventsComponent', () => {
  let component: WorkloadPastEventsComponent;
  let fixture: ComponentFixture<WorkloadPastEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadPastEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadPastEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
