import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsEventsComponent } from './workloads-events.component';

describe('WorkloadsEventsComponent', () => {
  let component: WorkloadsEventsComponent;
  let fixture: ComponentFixture<WorkloadsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
