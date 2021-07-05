import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulebotComponent } from './mulebot.component';

describe('MulebotComponent', () => {
  let component: MulebotComponent;
  let fixture: ComponentFixture<MulebotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulebotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulebotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
