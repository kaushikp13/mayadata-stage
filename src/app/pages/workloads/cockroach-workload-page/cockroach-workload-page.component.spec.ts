import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockroachWorkloadPageComponent } from './cockroach-workload-page.component';

describe('CockroachWorkloadPageComponent', () => {
  let component: CockroachWorkloadPageComponent;
  let fixture: ComponentFixture<CockroachWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockroachWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockroachWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
