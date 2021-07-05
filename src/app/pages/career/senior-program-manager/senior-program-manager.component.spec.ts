import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorProgramManagerComponent } from './senior-program-manager.component';

describe('SeniorProgramManagerComponent', () => {
  let component: SeniorProgramManagerComponent;
  let fixture: ComponentFixture<SeniorProgramManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorProgramManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorProgramManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
