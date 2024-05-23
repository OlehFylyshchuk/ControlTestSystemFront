import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () => import('admin/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'student',
    loadChildren: () => import('student/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
