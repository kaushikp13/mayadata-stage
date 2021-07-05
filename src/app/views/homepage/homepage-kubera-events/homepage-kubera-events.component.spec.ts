import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaEventsComponent } from './homepage-kubera-events.component';

describe('HomepageKuberaEventsComponent', () => {
  let component: HomepageKuberaEventsComponent;
  let fixture: ComponentFixture<HomepageKuberaEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
