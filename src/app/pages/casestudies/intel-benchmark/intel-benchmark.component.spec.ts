import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelBenchmarkComponent } from './intel-benchmark.component';

describe('IntelBenchmarkComponent', () => {
  let component: IntelBenchmarkComponent;
  let fixture: ComponentFixture<IntelBenchmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelBenchmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
