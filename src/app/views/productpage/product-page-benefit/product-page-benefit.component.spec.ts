import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageBenefitComponent } from './product-page-benefit.component';

describe('ProductPageBenefitComponent', () => {
  let component: ProductPageBenefitComponent;
  let fixture: ComponentFixture<ProductPageBenefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageBenefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
