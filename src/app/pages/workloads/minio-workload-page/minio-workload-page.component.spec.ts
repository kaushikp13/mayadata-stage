import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinioWorkloadPageComponent } from './minio-workload-page.component';

describe('MinioWorkloadPageComponent', () => {
  let component: MinioWorkloadPageComponent;
  let fixture: ComponentFixture<MinioWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinioWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinioWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
