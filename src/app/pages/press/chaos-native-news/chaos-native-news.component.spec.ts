import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosNativeNewsComponent } from './chaos-native-news.component';

describe('ChaosNativeNewsComponent', () => {
  let component: ChaosNativeNewsComponent;
  let fixture: ComponentFixture<ChaosNativeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaosNativeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaosNativeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
