import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeroComponent } from './homepage-hero.component';

describe('HomepageHeroComponent', () => {
  let component: HomepageHeroComponent;
  let fixture: ComponentFixture<HomepageHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
