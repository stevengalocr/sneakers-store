import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InstagramFeedComponent {
    instagramImage = '/assets/instagram/feed-ig.png';

    redirectToInstagram(): void {
        window.open('https://www.instagram.com/wegotallstore_sg/', '_blank');
    }
}
