import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadPartnersComponent } from './workload-partners.component';

describe('WorkloadPartnersComponent', () => {
  let component: WorkloadPartnersComponent;
  let fixture: ComponentFixture<WorkloadPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
