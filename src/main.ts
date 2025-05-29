import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { AboutComponent } from './app/pages/about/about.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
