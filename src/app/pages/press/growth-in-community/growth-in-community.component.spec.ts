import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthInCommunityComponent } from './growth-in-community.component';

describe('GrowthInCommunityComponent', () => {
  let component: GrowthInCommunityComponent;
  let fixture: ComponentFixture<GrowthInCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthInCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthInCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
