import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/pages/home/home.component';
import { HeaderComponent } from './app/shared/header/header.component';
import { ProductGridComponent } from './app/shared/product-grid/product-grid.component';
import { InstagramFeedComponent } from './app/shared/instagram-feed/instagram-feed.component';


bootstrapApplication(HeaderComponent).catch(err => console.error(err));
bootstrapApplication(HomeComponent).catch(err => console.error(err));
bootstrapApplication(ProductGridComponent).catch(err => console.error(err));
bootstrapApplication(InstagramFeedComponent).catch(err => console.error(err));

