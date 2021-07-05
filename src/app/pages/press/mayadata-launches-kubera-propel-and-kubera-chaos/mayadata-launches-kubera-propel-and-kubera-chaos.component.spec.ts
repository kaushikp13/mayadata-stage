import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayadataLaunchesKuberaPropelAndKuberaChaosComponent } from './mayadata-launches-kubera-propel-and-kubera-chaos.component';

describe('MayadataLaunchesKuberaPropelAndKuberaChaosComponent', () => {
  let component: MayadataLaunchesKuberaPropelAndKuberaChaosComponent;
  let fixture: ComponentFixture<MayadataLaunchesKuberaPropelAndKuberaChaosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayadataLaunchesKuberaPropelAndKuberaChaosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayadataLaunchesKuberaPropelAndKuberaChaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
