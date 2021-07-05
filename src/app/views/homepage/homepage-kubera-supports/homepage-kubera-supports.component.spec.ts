import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaSupportsComponent } from './homepage-kubera-supports.component';

describe('HomepageKuberaSupportsComponent', () => {
  let component: HomepageKuberaSupportsComponent;
  let fixture: ComponentFixture<HomepageKuberaSupportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaSupportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaSupportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
