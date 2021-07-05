import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcastComponent } from './comcast.component';

describe('ComcastComponent', () => {
  let component: ComcastComponent;
  let fixture: ComponentFixture<ComcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
