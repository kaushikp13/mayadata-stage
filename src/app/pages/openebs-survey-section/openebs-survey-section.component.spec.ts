import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenebsSurveySectionComponent } from './openebs-survey-section.component';

describe('OpenebsSurveySectionComponent', () => {
  let component: OpenebsSurveySectionComponent;
  let fixture: ComponentFixture<OpenebsSurveySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenebsSurveySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenebsSurveySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
