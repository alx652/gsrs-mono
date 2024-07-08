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
        path: 'api',
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
];
