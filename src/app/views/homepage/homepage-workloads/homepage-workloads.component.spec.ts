import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWorkloadsComponent } from './homepage-workloads.component';

describe('HomepageWorkloadsComponent', () => {
  let component: HomepageWorkloadsComponent;
  let fixture: ComponentFixture<HomepageWorkloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWorkloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWorkloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
