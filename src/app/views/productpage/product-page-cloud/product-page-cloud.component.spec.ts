import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageCloudComponent } from './product-page-cloud.component';

describe('ProductPageCloudComponent', () => {
  let component: ProductPageCloudComponent;
  let fixture: ComponentFixture<ProductPageCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
