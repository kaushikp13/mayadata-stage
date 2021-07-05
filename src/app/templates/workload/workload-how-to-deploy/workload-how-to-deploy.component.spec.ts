import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadHowToDeployComponent } from './workload-how-to-deploy.component';

describe('WorkloadHowToDeployComponent', () => {
  let component: WorkloadHowToDeployComponent;
  let fixture: ComponentFixture<WorkloadHowToDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadHowToDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadHowToDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
