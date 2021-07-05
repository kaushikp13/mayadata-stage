import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseDeployUsingOpenebsComponent } from './usecase-deploy-using-openebs.component';

describe('UsecaseDeployUsingOpenebsComponent', () => {
  let component: UsecaseDeployUsingOpenebsComponent;
  let fixture: ComponentFixture<UsecaseDeployUsingOpenebsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseDeployUsingOpenebsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseDeployUsingOpenebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
