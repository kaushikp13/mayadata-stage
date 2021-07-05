import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseIssuesComponent } from './usecase-issues.component';

describe('UsecaseIssuesComponent', () => {
  let component: UsecaseIssuesComponent;
  let fixture: ComponentFixture<UsecaseIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
