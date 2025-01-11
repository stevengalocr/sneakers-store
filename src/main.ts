import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/pages/home/home.component';
import { HeaderComponent } from './app/shared/header/header.component';


bootstrapApplication(HomeComponent).catch(err => console.error(err));

bootstrapApplication(HeaderComponent).catch(err => console.error(err));