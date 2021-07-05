import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadsHeroComponent } from './workloads-hero.component';

describe('WorkloadsHeroComponent', () => {
  let component: WorkloadsHeroComponent;
  let fixture: ComponentFixture<WorkloadsHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadsHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
