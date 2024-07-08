import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GsrsDownloadsComponent } from './gsrs-downloads.component';

describe('GsrsDownloadsComponent', () => {
  let component: GsrsDownloadsComponent;
  let fixture: ComponentFixture<GsrsDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsrsDownloadsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GsrsDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
