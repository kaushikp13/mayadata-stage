import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerconaWorkloadPageComponent } from './percona-workload-page.component';

describe('PerconaWorkloadPageComponent', () => {
  let component: PerconaWorkloadPageComponent;
  let fixture: ComponentFixture<PerconaWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerconaWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerconaWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
