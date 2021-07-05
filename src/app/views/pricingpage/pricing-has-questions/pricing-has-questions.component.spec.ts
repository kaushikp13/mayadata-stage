import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHasQuestionsComponent } from './pricing-has-questions.component';

describe('PricingHasQuestionsComponent', () => {
  let component: PricingHasQuestionsComponent;
  let fixture: ComponentFixture<PricingHasQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingHasQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingHasQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
