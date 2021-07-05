import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWhatKuberaComponent } from './homepage-what-kubera.component';

describe('HomepageWhatKuberaComponent', () => {
  let component: HomepageWhatKuberaComponent;
  let fixture: ComponentFixture<HomepageWhatKuberaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWhatKuberaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWhatKuberaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
