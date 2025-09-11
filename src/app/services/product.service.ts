import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  produts = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      description: 'Description 1',
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 10.99,
      description: 'Description 1',
      image: 'product1.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 10.99,
      description: 'Description 1',
      image: 'product1.jpg',
    },
  ]);
}
