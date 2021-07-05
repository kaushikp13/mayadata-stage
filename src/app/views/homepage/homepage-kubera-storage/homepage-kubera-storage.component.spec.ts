import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaStorageComponent } from './homepage-kubera-storage.component';

describe('HomepageKuberaStorageComponent', () => {
  let component: HomepageKuberaStorageComponent;
  let fixture: ComponentFixture<HomepageKuberaStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
