import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrometheusWorkloadPageComponent } from './prometheus-workload-page.component';

describe('PrometheusWorkloadPageComponent', () => {
  let component: PrometheusWorkloadPageComponent;
  let fixture: ComponentFixture<PrometheusWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrometheusWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrometheusWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
