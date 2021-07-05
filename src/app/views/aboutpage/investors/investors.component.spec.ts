import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestorsTeamComponent } from './investors.component';



describe('InvestorsTeamComponent', () => {
  let component: InvestorsTeamComponent;
  let fixture: ComponentFixture<InvestorsTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorsTeamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
