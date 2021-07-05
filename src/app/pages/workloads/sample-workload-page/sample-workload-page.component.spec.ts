import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWorkloadPageComponent } from './sample-workload-page.component';

describe('SampleWorkloadPageComponent', () => {
  let component: SampleWorkloadPageComponent;
  let fixture: ComponentFixture<SampleWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
