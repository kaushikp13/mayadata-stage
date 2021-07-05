import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AristaComponent } from './arista.component';

describe('AristaComponent', () => {
  let component: AristaComponent;
  let fixture: ComponentFixture<AristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
