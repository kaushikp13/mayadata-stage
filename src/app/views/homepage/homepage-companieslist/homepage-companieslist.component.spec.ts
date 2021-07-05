import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCompanieslistComponent } from './homepage-companieslist.component';

describe('HomepageCompanieslistComponent', () => {
  let component: HomepageCompanieslistComponent;
  let fixture: ComponentFixture<HomepageCompanieslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageCompanieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageCompanieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
