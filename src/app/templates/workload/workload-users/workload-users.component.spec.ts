import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadUsersComponent } from './workload-users.component';

describe('WorkloadUsersComponent', () => {
  let component: WorkloadUsersComponent;
  let fixture: ComponentFixture<WorkloadUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
