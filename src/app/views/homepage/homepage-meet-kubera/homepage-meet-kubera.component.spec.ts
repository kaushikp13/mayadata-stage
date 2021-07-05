import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMeetKuberaComponent } from './homepage-meet-kubera.component';

describe('HomepageKuberaVideoComponent', () => {
  let component: HomepageMeetKuberaComponent;
  let fixture: ComponentFixture<HomepageMeetKuberaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageMeetKuberaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMeetKuberaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
