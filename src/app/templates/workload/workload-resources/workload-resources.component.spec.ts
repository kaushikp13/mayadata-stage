import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadResourcesComponent } from './workload-resources.component';

describe('WorkloadResourcesComponent', () => {
  let component: WorkloadResourcesComponent;
  let fixture: ComponentFixture<WorkloadResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
