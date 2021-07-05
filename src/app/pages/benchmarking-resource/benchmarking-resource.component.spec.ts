import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkingResourceComponent } from './benchmarking-resource.component';

describe('BenchmarkingResourceComponent', () => {
  let component: BenchmarkingResourceComponent;
  let fixture: ComponentFixture<BenchmarkingResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkingResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkingResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
