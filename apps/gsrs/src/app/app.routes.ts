import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { GsrsHomeComponent } from 'gsrs-home';

export const routes: Route[] = [
    {
        path: '',
        component: GsrsHomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('gsrs-about').then(
            (m) => m.GsrsAboutComponent
          ),
      },
      {
        path: 'api-documentation',
        loadComponent: () =>
          import('gsrs-api').then(
            (m) => m.GsrsApiComponent
          ),
      },
      {
        path: 'downloads',
        loadComponent: () =>
          import('gsrs-downloads').then(
            (m) => m.GsrsDownloadsComponent
          ),
      },
      {
        path: 'privacy',
        loadComponent: () =>
        import('libs/features/gsrs/gsrs-privacy-page/src/lib/gsrs-privacy-page/gsrs-privacy-page.component').then(
            (m) => m.GsrsPrivacyPageComponent
          ),
      },
  
];
