import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageKuberaTrustComponent } from './homepage-kubera-trust.component';

describe('HomepageKuberaTrustComponent', () => {
  let component: HomepageKuberaTrustComponent;
  let fixture: ComponentFixture<HomepageKuberaTrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageKuberaTrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageKuberaTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
