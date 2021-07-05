import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulebotPolicyComponent } from './mulebot-policy.component';

describe('MulebotPolicyComponent', () => {
  let component: MulebotPolicyComponent;
  let fixture: ComponentFixture<MulebotPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulebotPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulebotPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
