
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Route[] = [

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
