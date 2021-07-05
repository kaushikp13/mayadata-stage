import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePopupComponent } from './resource-popup.component';

describe('ResourcePopupComponent', () => {
  let component: ResourcePopupComponent;
  let fixture: ComponentFixture<ResourcePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
