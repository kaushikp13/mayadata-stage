import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNewsletterFormComponent } from './footer-newsletter-form.component';

describe('FooterNewsletterFormComponent', () => {
  let component: FooterNewsletterFormComponent;
  let fixture: ComponentFixture<FooterNewsletterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNewsletterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNewsletterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
