import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAdvocateComponent } from './developer-advocate.component';

describe('DeveloperAdvocateComponent', () => {
  let component: DeveloperAdvocateComponent;
  let fixture: ComponentFixture<DeveloperAdvocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperAdvocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperAdvocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
