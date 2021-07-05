import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridCloudComponent } from './hybrid-cloud.component';

describe('HybridCloudComponent', () => {
  let component: HybridCloudComponent;
  let fixture: ComponentFixture<HybridCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
