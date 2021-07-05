import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalservicespageMidComponent } from './professionalservicespage-mid.component';

describe('ProfessionalservicespageMidComponent', () => {
  let component: ProfessionalservicespageMidComponent;
  let fixture: ComponentFixture<ProfessionalservicespageMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalservicespageMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalservicespageMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
