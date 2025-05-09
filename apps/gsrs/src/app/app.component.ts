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
      link: 'https://gsrs.ncats.nih.gov/ginas/app/ui/',
      label: 'Try GSRS',
      external: true
    },
    {
      link: 'api',
      label: 'API / DOCUMENTATION',
    },
    {
      link: 'about',
      label: 'ABOUT',
    },
    {
      link: 'downloads',
      label: 'DOWNLOADS',
    }];

  closeSidenav() {
    if (this.header) {
      this.header.menu.close();
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withEnabledBlockingInitialNavigation())],
};

