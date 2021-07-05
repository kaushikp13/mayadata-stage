import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasesSuccessComponent } from './usecases-success.component';

describe('UsecasesSuccessComponent', () => {
  let component: UsecasesSuccessComponent;
  let fixture: ComponentFixture<UsecasesSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecasesSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecasesSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
