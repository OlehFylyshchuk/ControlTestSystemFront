import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
 
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Add this route:admin-page

  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },

  {
    path: 'admin-page',
    loadComponent: () =>
      loadRemoteModule('admin-page', './Component').then((m) => m.AppComponent),
  },

  {
    path: 'student-page',
    loadComponent: () =>
      loadRemoteModule('student-page', './Component').then((m) => m.AppComponent),
  },

  {
    path: 'teacher-page',
    loadComponent: () =>
      loadRemoteModule('teacher-page', './Component').then((m) => m.AppComponent),
  },

  {
    path: 'auth',
    loadComponent: () =>
      loadRemoteModule('auth', './Component').then((m) => m.AppComponent),
  },
  // {
  //   path: 'auth/login',
  //   loadComponent: () =>
  //     loadRemoteModule('auth', './LoginComponent').then(m => m.LoginComponent),
  // },
  // {
  //   path: 'auth/signup',
  //   loadComponent: () =>
  //     loadRemoteModule('auth', './SignupComponent').then(m => m.SignupComponent),
  // },
  {
    path: 'test-manager',
    loadComponent: () =>
      loadRemoteModule('test-manager', './Component').then((m) => m.AppComponent),
  },


  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
