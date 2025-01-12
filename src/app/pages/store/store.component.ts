import { Component } from '@angular/core';
import { products } from '../../data/products-data';
import { CommonModule } from '@angular/common';
import { productsExtra } from '../../data/products-extra';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store',
  imports: [CommonModule, RouterModule], 
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  standalone: true,
})
export class StoreComponent {
  products = products;
  initialProducts = window.innerWidth <= 768 ? 3 : 4;
  visibleProducts = [...this.products.slice(0, this.initialProducts)];

  loadMoreProducts(): void {
    const currentLength = this.visibleProducts.length;
    const nextItems = window.innerWidth <= 768 ? 3 : 4;
    this.visibleProducts.push(
      ...this.products.slice(currentLength, currentLength + nextItems)
    );
  }

  showLessProducts(): void {
    this.visibleProducts = [...this.products.slice(0, this.initialProducts)];
  }

  productsExtras = productsExtra;
      initialProductsExtras = window.innerWidth <= 768 ? 3 : 4; // Carga 3 en móvil, 4 en web
      visibleProductsExtras = [...this.productsExtras.slice(0, this.initialProductsExtras)];
  
      loadMoreProductsExtras(): void {
          const currentLength = this.visibleProductsExtras.length;
          const nextItems = window.innerWidth <= 768 ? 3 : 4;
          this.visibleProductsExtras.push(...this.productsExtras.slice(currentLength, currentLength + nextItems));
      }
  
      showLessProductsExtras(): void {
          this.visibleProductsExtras = [...this.productsExtras.slice(0, this.initialProductsExtras)];
      }
}
