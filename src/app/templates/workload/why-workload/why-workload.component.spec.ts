import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWorkloadComponent } from './why-workload.component';

describe('WhyWorkloadComponent', () => {
  let component: WhyWorkloadComponent;
  let fixture: ComponentFixture<WhyWorkloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyWorkloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
