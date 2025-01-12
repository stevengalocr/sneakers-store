import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tienda', component: StoreComponent },
  { path: 'nosotros', component: AboutUsComponent }
];
