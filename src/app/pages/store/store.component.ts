import { Component } from '@angular/core';
import { products } from '../../data/products-data';
import { productsExtra } from '../../data/products-extra';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class StoreComponent {
  allProducts = this.shuffleArray([...products, ...productsExtra]);
  initialProducts = window.innerWidth <= 768 ? 6 : 12;
  visibleProducts = [...this.allProducts.slice(0, this.initialProducts)];
  searchQuery = '';

  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.visibleProducts = this.allProducts.filter(product =>
        product.searchTags.some((tag: string) => tag.toLowerCase().includes(query))
    );
}

  loadMoreProducts(): void {
    const currentLength = this.visibleProducts.length;
    const nextItems = window.innerWidth <= 768 ? 6 : 12;
    this.visibleProducts.push(
      ...this.allProducts.slice(currentLength, currentLength + nextItems)
    );
  }

  showLessProducts(): void {
    this.visibleProducts = [...this.allProducts.slice(0, this.initialProducts)];
  }
}
