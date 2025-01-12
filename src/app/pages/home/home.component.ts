import { Component } from '@angular/core';
import { ProductGridComponent } from "../product-grid/product-grid.component";
import { InstagramFeedComponent } from "../instagram-feed/instagram-feed.component";
import { ProductExtraComponent } from "../product-extra/product-extra.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [ProductGridComponent, InstagramFeedComponent, ProductExtraComponent]
})
export class HomeComponent {
    mainTitle: string = '¿LISTO PARA MARCAR LA DIFERENCIA?';
    subtitle: string = '¡Pide el tuyo ahora, solo un mensaje de distancia!';
    buttonText: string = 'ESCRÍBENOS AHORA';
}
