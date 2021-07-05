import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionEngineerComponent } from './solution-engineer.component';

describe('SolutionEngineerComponent', () => {
  let component: SolutionEngineerComponent;
  let fixture: ComponentFixture<SolutionEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
