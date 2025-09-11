import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update((cart) => [...cart, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update((cart) => cart.filter((item) => item.id !== product.id));
  }

  clearCart() {
    this.cart.set([]);
  }

  getCart() {
    return this.cart();
  }
}
