import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GsrsLicensingComponent } from './gsrs-licensing.component';

describe('GsrsLicensingComponent', () => {
  let component: GsrsLicensingComponent;
  let fixture: ComponentFixture<GsrsLicensingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsrsLicensingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GsrsLicensingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
