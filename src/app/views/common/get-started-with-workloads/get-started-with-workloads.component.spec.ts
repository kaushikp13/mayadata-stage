import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedWithWorkloadsComponent } from './get-started-with-workloads.component';

describe('GetStartedWithWorkloadsComponent', () => {
  let component: GetStartedWithWorkloadsComponent;
  let fixture: ComponentFixture<GetStartedWithWorkloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedWithWorkloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedWithWorkloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
