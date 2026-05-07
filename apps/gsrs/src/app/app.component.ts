import { ApplicationConfig, ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { routes } from './app.routes';
import { FooterTemplateComponent } from '@ncats-frontend-library/shared/utils/footer-template';
import { MobileHeaderTemplateComponent } from '@ncats-frontend-library/shared/utils/mobile-header-template';
import { HeaderTemplateComponent } from '@ncats-frontend-library/shared/utils/header-template';
import { LinkTemplateProperty } from '@ncats-frontend-library/models/utils';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgClass } from '@angular/common';
import { RdasSearchComponent } from '@ncats-frontend-library/shared/rdas/rdas-search';
import { CdkScrollable, CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { LoadingSpinnerComponent } from '@ncats-frontend-library/shared/utils/loading-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NxWelcomeComponent,
    RouterModule,
    RouterLink,
    NgClass,
    MatSidenavModule,
    RdasSearchComponent,
    RouterOutlet,
    FooterTemplateComponent,
    HeaderTemplateComponent,
    CdkScrollableModule,
    ScrollingModule,
    LoadingSpinnerComponent,
    MobileHeaderTemplateComponent,
    MatIconModule,
    MatButtonModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild(CdkScrollable, { static: false }) scrollable!: CdkScrollable;
  /**
   * reference to header oject. used to change display options
   */
  @ViewChild(MobileHeaderTemplateComponent, { static: false })
  header!: MobileHeaderTemplateComponent;

  title = 'gsrs';
  loaded = false;
  hideSearch = false;
  mobile = false;
  activeLink!: string;
  links: LinkTemplateProperty[] = [
      {
        link: '/ginas/app/ui/',
        label: 'Try GSRS',
        external: true,
        title: 'Try the GSRS application with a public data set'
      },
      {
        link: 'api-documentation',
        label: 'API / Documentation',
        title: 'API documentation'
      },
      {
        link: 'about',
        label: 'ABOUT',
        title: 'Learn about the GSRS project',
        class: 'wide-view-menu-item'
      },
      {
        link: 'downloads',
        label: 'DOWNLOADS',
        title: 'Download code, data and other resources'
      }
   ];

    constructor(
      private breakpointObserver: BreakpointObserver,
      private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
     this.breakpointObserver.observe([
       '(max-width: 768px)', '(min-width: 769px)', Breakpoints.Handset
      // ,
      // Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.Handset]) {
        }
        if (result.breakpoints['(max-width: 768px)']) {
          this.mobile=true;
          this.changeDetectorRef.detectChanges();
        }
        if (result.breakpoints['(min-width: 769px)']) {
          this.mobile=false;
          this.changeDetectorRef.detectChanges();
        }
      }

    });
  }

  closeSidenav() {
    if (this.header) {
      this.header.menu.close();
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
  ],
};
