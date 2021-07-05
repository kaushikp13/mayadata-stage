import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hacktoberfest2020Component } from './hacktoberfest2020.component';

describe('Hacktoberfest2020Component', () => {
  let component: Hacktoberfest2020Component;
  let fixture: ComponentFixture<Hacktoberfest2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hacktoberfest2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hacktoberfest2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
