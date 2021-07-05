import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagentoWorkloadPageComponent } from './magento-workload-page.component';

describe('MagentoWorkloadPageComponent', () => {
  let component: MagentoWorkloadPageComponent;
  let fixture: ComponentFixture<MagentoWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagentoWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagentoWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
