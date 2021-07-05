import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaMidContentComponent } from './homepage-kubera-mid-content.component';

describe('HomepageKuberaMidContentComponent', () => {
  let component: HomepageKuberaMidContentComponent;
  let fixture: ComponentFixture<HomepageKuberaMidContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaMidContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaMidContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
