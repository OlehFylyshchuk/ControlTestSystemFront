import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {path: 'sidebar',
    loadComponent: () =>
      import('../sidebar/sidebar.component').then((c) => c.SidebarComponent),}
];

