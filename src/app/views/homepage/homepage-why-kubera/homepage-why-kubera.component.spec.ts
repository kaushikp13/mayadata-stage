import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWhyKuberaComponent } from './homepage-why-kubera.component';

describe('HomepageWhyKuberaComponent', () => {
  let component: HomepageWhyKuberaComponent;
  let fixture: ComponentFixture<HomepageWhyKuberaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWhyKuberaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWhyKuberaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
