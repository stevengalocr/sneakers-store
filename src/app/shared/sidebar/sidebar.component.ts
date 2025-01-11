import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CommonModule]
})
export class SidebarComponent {
    isOpen = false;

    toggleSidebar() {
        this.isOpen = !this.isOpen;
    }

    closeSidebar() {
        this.isOpen = false;
    }
}
