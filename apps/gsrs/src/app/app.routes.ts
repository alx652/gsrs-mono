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
        path: 'licensing',
        loadComponent: () =>
        import('libs/features/gsrs/gsrs-licensing/src/lib/gsrs-licensing/gsrs-licensing.component').then(
          (m) => m.GsrsLicensingComponent
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
