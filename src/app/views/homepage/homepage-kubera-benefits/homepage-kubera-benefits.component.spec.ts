import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaBenefitsComponent } from './homepage-kubera-benefits.component';

describe('HomepageKuberaBenefitsComponent', () => {
  let component: HomepageKuberaBenefitsComponent;
  let fixture: ComponentFixture<HomepageKuberaBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
