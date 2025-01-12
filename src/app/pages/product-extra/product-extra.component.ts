import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { productsExtra } from '../../data/products-extra';

@Component({
  selector: 'app-product-extra',
  imports: [CommonModule],
  templateUrl: './product-extra.component.html',
  styleUrl: './product-extra.component.scss',
  standalone: true,
})
export class ProductExtraComponent {
    products = this.shuffleArray([...productsExtra]);
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
