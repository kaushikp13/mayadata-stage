import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePricingOverviewComponent } from './homepage-pricing-overview.component';

describe('HomepagePricingOverviewComponent', () => {
  let component: HomepagePricingOverviewComponent;
  let fixture: ComponentFixture<HomepagePricingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagePricingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagePricingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
