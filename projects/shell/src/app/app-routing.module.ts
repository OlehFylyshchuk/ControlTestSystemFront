import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-shell/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
},
{
  path: 'student-page',
  loadChildren: () =>
    loadRemoteModule('student-page', './remoteModule').then((m) => m.StudentPageMainModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
