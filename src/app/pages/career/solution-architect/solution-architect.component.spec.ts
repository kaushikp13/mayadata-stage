import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionArchitectComponent } from './solution-architect.component';

describe('SolutionArchitectComponent', () => {
  let component: SolutionArchitectComponent;
  let fixture: ComponentFixture<SolutionArchitectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionArchitectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
