import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadFaqsComponent } from './workload-faqs.component';

describe('WorkloadFaqsComponent', () => {
  let component: WorkloadFaqsComponent;
  let fixture: ComponentFixture<WorkloadFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
