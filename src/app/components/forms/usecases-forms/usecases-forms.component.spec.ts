import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasesFormsComponent } from './usecases-forms.component';

describe('UsecasesFormsComponent', () => {
  let component: UsecasesFormsComponent;
  let fixture: ComponentFixture<UsecasesFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecasesFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecasesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
