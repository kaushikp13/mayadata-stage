import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueGreenComponent } from './blue-green.component';

describe('BlueGreenComponent', () => {
  let component: BlueGreenComponent;
  let fixture: ComponentFixture<BlueGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
