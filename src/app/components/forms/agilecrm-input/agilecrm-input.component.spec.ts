import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilecrmInputComponent } from './agilecrm-input.component';

describe('AgilecrmInputComponent', () => {
  let component: AgilecrmInputComponent;
  let fixture: ComponentFixture<AgilecrmInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilecrmInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilecrmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
