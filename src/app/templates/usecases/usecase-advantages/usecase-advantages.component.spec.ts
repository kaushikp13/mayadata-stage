import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseAdvantagesComponent } from './usecase-advantages.component';

describe('UsecaseAdvantagesComponent', () => {
  let component: UsecaseAdvantagesComponent;
  let fixture: ComponentFixture<UsecaseAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
