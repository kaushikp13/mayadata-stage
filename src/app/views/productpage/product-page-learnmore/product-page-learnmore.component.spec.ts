import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageLearnmoreComponent } from './product-page-learnmore.component';

describe('ProductPageLearnmoreComponent', () => {
  let component: ProductPageLearnmoreComponent;
  let fixture: ComponentFixture<ProductPageLearnmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageLearnmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageLearnmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
