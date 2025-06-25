import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GsrsPrivacyPageComponent } from "./gsrs-privacy-page.component";

describe('FeaturesGsrsPrivacyPageComponent', () => {
  let component: GsrsPrivacyPageComponent;
  let fixture: ComponentFixture<GsrsPrivacyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        GsrsPrivacyPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GsrsPrivacyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
