import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GsrsHomeComponent } from './gsrs-home.component';

describe('GsrsHomeComponent', () => {
  let component: GsrsHomeComponent;
  let fixture: ComponentFixture<GsrsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsrsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GsrsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
