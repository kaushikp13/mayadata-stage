import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticWorkloadPageComponent } from './elastic-workload-page.component';

describe('ElasticWorkloadPageComponent', () => {
  let component: ElasticWorkloadPageComponent;
  let fixture: ComponentFixture<ElasticWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElasticWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
