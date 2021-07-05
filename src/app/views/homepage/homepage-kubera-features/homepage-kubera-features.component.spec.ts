import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaFeaturesComponent } from './homepage-kubera-features.component';

describe('HomepageKuberaFeaturesComponent', () => {
  let component: HomepageKuberaFeaturesComponent;
  let fixture: ComponentFixture<HomepageKuberaFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
