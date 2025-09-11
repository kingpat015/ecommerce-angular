import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], // ✅ plural
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description 1',
      image: 'assets/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description 2',
      image: 'assets/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Description 3',
      image: 'assets/product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      description: 'Description 4',
      image: 'assets/product4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500,
      description: 'Description 5',
      image: 'assets/product5.jpg',
    },
  ];
}
