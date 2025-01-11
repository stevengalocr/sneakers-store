import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    mainTitle: string = '¿LISTO PARA MARCAR LA DIFERENCIA?';
    subtitle: string = '¡Pide el tuyo ahora, solo un mensaje de distancia!';
    buttonText: string = 'ESCRÍBENOS AHORA';
}
