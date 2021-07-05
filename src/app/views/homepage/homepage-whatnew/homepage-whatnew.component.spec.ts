import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWhatnewComponent } from './homepage-whatnew.component';

describe('HomepageWhatnewComponent', () => {
  let component: HomepageWhatnewComponent;
  let fixture: ComponentFixture<HomepageWhatnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWhatnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWhatnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
