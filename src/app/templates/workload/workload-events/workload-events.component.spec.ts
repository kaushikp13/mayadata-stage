import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadEventsComponent } from './workload-events.component';

describe('WorkloadEventsComponent', () => {
  let component: WorkloadEventsComponent;
  let fixture: ComponentFixture<WorkloadEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
