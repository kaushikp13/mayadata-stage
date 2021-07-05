import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPersistentVolumesComponent } from './local-persistent-volumes.component';

describe('LocalPersistentVolumesComponent', () => {
  let component: LocalPersistentVolumesComponent;
  let fixture: ComponentFixture<LocalPersistentVolumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalPersistentVolumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPersistentVolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
