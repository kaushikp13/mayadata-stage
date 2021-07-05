import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPagePlatformsComponent } from './product-page-platforms.component';

describe('ProductPagePlatformsComponent', () => {
  let component: ProductPagePlatformsComponent;
  let fixture: ComponentFixture<ProductPagePlatformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPagePlatformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPagePlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
