import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../data/products-data';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductGridComponent {
    products = this.shuffleArray([...products]);
    initialProducts = window.innerWidth <= 768 ? 3 : 4; // Carga 3 en móvil, 4 en web
    visibleProducts = [...this.products.slice(0, this.initialProducts)];

    loadMoreProducts(): void {
        const currentLength = this.visibleProducts.length;
        const nextItems = window.innerWidth <= 768 ? 3 : 4;
        this.visibleProducts.push(...this.products.slice(currentLength, currentLength + nextItems));
    }

    showLessProducts(): void {
        this.visibleProducts = [...this.products.slice(0, this.initialProducts)];
    }

    shuffleArray(array: any[]): any[] {
        return array.sort(() => Math.random() - 0.5);
    }
}
