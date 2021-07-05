import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsCompanieslistComponent } from './workloads-companieslist.component';

describe('WorkloadsCompanieslistComponent', () => {
  let component: WorkloadsCompanieslistComponent;
  let fixture: ComponentFixture<WorkloadsCompanieslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsCompanieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsCompanieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
