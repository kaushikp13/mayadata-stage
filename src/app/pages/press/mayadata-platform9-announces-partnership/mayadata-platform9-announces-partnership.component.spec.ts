import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayadataPlatform9AnnouncesPartnershipComponent } from './mayadata-platform9-announces-partnership.component';

describe('MayadataPlatform9AnnouncesPartnershipComponent', () => {
  let component: MayadataPlatform9AnnouncesPartnershipComponent;
  let fixture: ComponentFixture<MayadataPlatform9AnnouncesPartnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayadataPlatform9AnnouncesPartnershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayadataPlatform9AnnouncesPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
