import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseIntroComponent } from './usecase-intro.component';

describe('UsecaseIntroComponent', () => {
  let component: UsecaseIntroComponent;
  let fixture: ComponentFixture<UsecaseIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
