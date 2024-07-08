import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GsrsAboutComponent } from './gsrs-about.component';

describe('GsrsAboutComponent', () => {
  let component: GsrsAboutComponent;
  let fixture: ComponentFixture<GsrsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsrsAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GsrsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
