import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpFormsComponent } from './icp-forms.component';

describe('IcpFormsComponent', () => {
  let component: IcpFormsComponent;
  let fixture: ComponentFixture<IcpFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcpFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcpFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
