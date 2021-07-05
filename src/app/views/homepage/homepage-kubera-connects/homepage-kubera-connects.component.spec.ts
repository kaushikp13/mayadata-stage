import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaConnectsComponent } from './homepage-kubera-connects.component';

describe('HomepageKuberaConnectsComponent', () => {
  let component: HomepageKuberaConnectsComponent;
  let fixture: ComponentFixture<HomepageKuberaConnectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaConnectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaConnectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
