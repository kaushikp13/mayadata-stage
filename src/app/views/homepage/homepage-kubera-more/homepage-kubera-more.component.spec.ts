import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaMoreComponent } from './homepage-kubera-more.component';

describe('HomepageKuberaMoreComponent', () => {
  let component: HomepageKuberaMoreComponent;
  let fixture: ComponentFixture<HomepageKuberaMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
