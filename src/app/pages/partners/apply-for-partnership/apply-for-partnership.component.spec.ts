import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForPartnershipComponent } from './apply-for-partnership.component';

describe('ApplyForPartnershipComponent', () => {
  let component: ApplyForPartnershipComponent;
  let fixture: ComponentFixture<ApplyForPartnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyForPartnershipComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
