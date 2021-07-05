import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageHeroComponent } from './product-page-hero.component';

describe('ProductPageHeroComponent', () => {
  let component: ProductPageHeroComponent;
  let fixture: ComponentFixture<ProductPageHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
