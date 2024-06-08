import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'testing-form',
    loadChildren: () =>
      import('testing-form/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Routes').then((m) => m.remoteRoutes),
  },
  
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./header/header.component').then((c) => c.HeaderComponent),
  },
  {
    path: 'student',
    loadChildren: () => import('student/Routes').then((m) => m.remoteRoutes),
  },
  // {
  //   path: 'sidebar',
  //   loadChildren: () => import('student/Routes').then((m) => m.remoteRoutes),
  // },
  {
    path: 'quiz-manager',
    loadComponent: () =>
      import('@cts/quiz-manager').then((m) => m.QuizManagerComponent),
  },
];
