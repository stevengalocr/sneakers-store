import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [SidebarComponent, RouterModule]
})
export class HeaderComponent {
    instagramLink: string = 'https://www.instagram.com/wegotallstore_sg/';
}
