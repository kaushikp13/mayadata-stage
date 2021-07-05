import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBlogComponent } from './pricing-blog.component';

describe('PricingBlogComponent', () => {
  let component: PricingBlogComponent;
  let fixture: ComponentFixture<PricingBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
