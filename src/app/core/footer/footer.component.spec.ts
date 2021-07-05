import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentOLD } from './footer.component';

describe('FooterComponentOLD', () => {
  let component: FooterComponentOLD;
  let fixture: ComponentFixture<FooterComponentOLD>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponentOLD]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponentOLD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
