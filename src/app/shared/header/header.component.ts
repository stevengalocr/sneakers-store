// src/app/shared/header/header.component.ts
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [SidebarComponent]
})
export class HeaderComponent {
    instagramLink: string = 'https://www.instagram.com/wegotallstore_sg/';
}
