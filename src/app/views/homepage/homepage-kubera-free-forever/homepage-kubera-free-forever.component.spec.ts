import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaFreeForeverComponent } from './homepage-kubera-free-forever.component';

describe('HomepageKuberaFreeForeverComponent', () => {
  let component: HomepageKuberaFreeForeverComponent;
  let fixture: ComponentFixture<HomepageKuberaFreeForeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaFreeForeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaFreeForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
