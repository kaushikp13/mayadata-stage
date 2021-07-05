import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsFaqsComponent } from './workloads-faqs.component';

describe('WorkloadsFaqsComponent', () => {
  let component: WorkloadsFaqsComponent;
  let fixture: ComponentFixture<WorkloadsFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
