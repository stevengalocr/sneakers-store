import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/pages/home/home.component';
import { HeaderComponent } from './app/shared/header/header.component';
import { ProductGridComponent } from './app/pages/product-grid/product-grid.component';
import { InstagramFeedComponent } from './app/pages/instagram-feed/instagram-feed.component';
import { FooterComponent } from './app/shared/footer/footer.component';
import { ProductExtraComponent } from './app/pages/product-extra/product-extra.component';


bootstrapApplication(HeaderComponent).catch(err => console.error(err));
bootstrapApplication(HomeComponent).catch(err => console.error(err));
bootstrapApplication(ProductGridComponent).catch(err => console.error(err));
bootstrapApplication(InstagramFeedComponent).catch(err => console.error(err));
bootstrapApplication(ProductExtraComponent).catch(err => console.error(err));
bootstrapApplication(FooterComponent).catch(err => console.error(err));

