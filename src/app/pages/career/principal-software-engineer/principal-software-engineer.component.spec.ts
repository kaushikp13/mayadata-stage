import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSoftwareEngineerComponent } from './principal-software-engineer.component';

describe('PrincipalSoftwareEngineerComponent', () => {
  let component: PrincipalSoftwareEngineerComponent;
  let fixture: ComponentFixture<PrincipalSoftwareEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalSoftwareEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSoftwareEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
