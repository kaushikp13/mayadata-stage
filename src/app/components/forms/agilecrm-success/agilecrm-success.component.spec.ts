import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilecrmSuccessComponent } from './agilecrm-success.component';

describe('AgilecrmSuccessComponent', () => {
  let component: AgilecrmSuccessComponent;
  let fixture: ComponentFixture<AgilecrmSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilecrmSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilecrmSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
