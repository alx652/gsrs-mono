import { CommonModule, ViewportScroller } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { RouterLink } from '@angular/router';

import {
  ChangeDetectorRef,
  Component, DestroyRef,
  ElementRef, inject,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
@Component({
  selector: 'lib-gsrs-downloads',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,        
    MatCardModule,
    MatListModule,
    ScrollingModule,
    OverlayModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './gsrs-downloads.component.html',
  styleUrl: './gsrs-downloads.component.scss',
})
export class GsrsDownloadsComponent implements OnInit {
  @ViewChildren('scrollSection') scrollSections!: QueryList<ElementRef>;
  mobile = false;

    /**
   * default active element for menu highlighting, will be replaced on scroll
   * @type {string}
   */
    activeElement = 'about';
    destroyRef = inject(DestroyRef);

    constructor(
      private changeRef: ChangeDetectorRef,
      private scrollDispatcher: ScrollDispatcher,
      public scroller: ViewportScroller,
      private breakpointObserver: BreakpointObserver
     ) { 
     }


  ngOnInit(): void {
    this.scrollDispatcher.scrolled()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        let scrollTop: number = this.scroller.getScrollPosition()[1] + 60
        if (scrollTop === 60) {
          this.activeElement = 'about';
          this.changeRef.detectChanges();
        } else {
          this.scrollSections.forEach((section) => {
            scrollTop = scrollTop - section.nativeElement?.scrollHeight;
            if (scrollTop >= 0) {
              this.activeElement = section.nativeElement.nextSibling.id;
              this.changeRef.detectChanges();
            }
          })
        }
      });

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.mobile = result.matches;
        this.changeRef.markForCheck();
      });
  }

  /**
   * scroll to section
   * @param el
   */
  public scroll(el: HTMLElement): void {
    //  el.scrollIntoView(true);
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  /**
   * check which section is active
   * @param {string} check
   * @returns {boolean}
   */
  isActive(check: string): boolean {
    return this.activeElement === check;
  }

}
