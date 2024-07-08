import { CdkScrollable } from '@angular/cdk/overlay';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LoadingSpinnerComponent } from "@ncats-frontend-library/shared/utils/loading-spinner";

@Component({
  selector: 'lib-gsrs-home',
  standalone: true,
  imports: [CommonModule,
    MatIconModule,
    MatCardModule,
    ScrollingModule,
    CdkScrollableModule,
    NgOptimizedImage,
    LoadingSpinnerComponent
  ],
  templateUrl: './gsrs-home.component.html',
  styleUrl: './gsrs-home.component.scss',
})
export class GsrsHomeComponent {
  @ViewChild(CdkScrollable, { static: false }) scrollable!: CdkScrollable;

  /**
   * element of the page to scroll to
   */
  @ViewChild('details', { read: ElementRef, static: true }) elemRef!: ElementRef;
data!: unknown;

  goToDetails(): void {
    this.elemRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
