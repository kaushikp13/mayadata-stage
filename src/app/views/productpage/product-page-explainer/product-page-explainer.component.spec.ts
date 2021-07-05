import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageExplainerComponent } from './product-page-explainer.component';

describe('ProductPageExplainerComponent', () => {
  let component: ProductPageExplainerComponent;
  let fixture: ComponentFixture<ProductPageExplainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageExplainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageExplainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
