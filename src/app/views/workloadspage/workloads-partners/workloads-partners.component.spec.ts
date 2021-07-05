import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsPartnersComponent } from './workloads-partners.component';

describe('WorkloadsPartnersComponent', () => {
  let component: WorkloadsPartnersComponent;
  let fixture: ComponentFixture<WorkloadsPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
