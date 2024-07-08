import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GsrsApiComponent } from './gsrs-api.component';

describe('GsrsApiComponent', () => {
  let component: GsrsApiComponent;
  let fixture: ComponentFixture<GsrsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsrsApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GsrsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
