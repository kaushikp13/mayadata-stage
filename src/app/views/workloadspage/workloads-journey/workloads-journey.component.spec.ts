import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsJourneyComponent } from './workloads-journey.component';

describe('WorkloadsJourneyComponent', () => {
  let component: WorkloadsJourneyComponent;
  let fixture: ComponentFixture<WorkloadsJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
