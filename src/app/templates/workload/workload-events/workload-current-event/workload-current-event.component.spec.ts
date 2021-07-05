import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadCurrentEventComponent } from './workload-current-event.component';

describe('WorkloadCurrentEventComponent', () => {
  let component: WorkloadCurrentEventComponent;
  let fixture: ComponentFixture<WorkloadCurrentEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadCurrentEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadCurrentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
