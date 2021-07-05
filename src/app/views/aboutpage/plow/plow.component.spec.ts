import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlowComponent } from './plow.component';

describe('PlowComponent', () => {
  let component: PlowComponent;
  let fixture: ComponentFixture<PlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
