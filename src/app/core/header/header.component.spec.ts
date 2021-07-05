import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentOLD } from './header.component';

describe('LandingPageHeaderComponent', () => {
  let component: HeaderComponentOLD;
  let fixture: ComponentFixture<HeaderComponentOLD>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentOLD]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentOLD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
