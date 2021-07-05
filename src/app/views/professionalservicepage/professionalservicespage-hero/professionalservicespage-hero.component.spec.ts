import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalservicespageHeroComponent } from './professionalservicespage-hero.component';

describe('ProfessionalservicespageHeroComponent', () => {
  let component: ProfessionalservicespageHeroComponent;
  let fixture: ComponentFixture<ProfessionalservicespageHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalservicespageHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalservicespageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
