import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaResourcesComponent } from './homepage-kubera-resources.component';

describe('HomepageKuberaResourcesComponent', () => {
  let component: HomepageKuberaResourcesComponent;
  let fixture: ComponentFixture<HomepageKuberaResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
