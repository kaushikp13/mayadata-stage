import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsOperatorsComponent } from './workloads-operators.component';

describe('WorkloadsOperatorsComponent', () => {
  let component: WorkloadsOperatorsComponent;
  let fixture: ComponentFixture<WorkloadsOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
