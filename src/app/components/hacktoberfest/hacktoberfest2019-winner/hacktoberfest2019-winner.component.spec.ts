import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hacktoberfest2019WinnerComponent } from './hacktoberfest2019-winner.component';

describe('Hacktoberfest2019WinnerComponent', () => {
  let component: Hacktoberfest2019WinnerComponent;
  let fixture: ComponentFixture<Hacktoberfest2019WinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hacktoberfest2019WinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hacktoberfest2019WinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
