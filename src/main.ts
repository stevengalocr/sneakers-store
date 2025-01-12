import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/pages/home/home.component';
import { HeaderComponent } from './app/shared/header/header.component';
import { ProductGridComponent } from './app/shared/product-grid/product-grid.component';


bootstrapApplication(HeaderComponent).catch(err => console.error(err));
bootstrapApplication(HomeComponent).catch(err => console.error(err));
bootstrapApplication(ProductGridComponent).catch(err => console.error(err));
