import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseSolutionsComponent } from './usecase-solutions.component';

describe('UsecaseSolutionsComponent', () => {
  let component: UsecaseSolutionsComponent;
  let fixture: ComponentFixture<UsecaseSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
