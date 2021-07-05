import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadHeroComponent } from './workload-hero.component';

describe('WorkloadHeroComponent', () => {
  let component: WorkloadHeroComponent;
  let fixture: ComponentFixture<WorkloadHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
