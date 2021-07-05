import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulsetsComponent } from './statefulsets.component';

describe('StatefulsetsComponent', () => {
  let component: StatefulsetsComponent;
  let fixture: ComponentFixture<StatefulsetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulsetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
