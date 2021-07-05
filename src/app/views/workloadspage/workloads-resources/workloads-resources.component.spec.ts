import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsResourcesComponent } from './workloads-resources.component';

describe('WorkloadsResourcesComponent', () => {
  let component: WorkloadsResourcesComponent;
  let fixture: ComponentFixture<WorkloadsResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
