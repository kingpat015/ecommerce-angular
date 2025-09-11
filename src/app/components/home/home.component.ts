import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, ProductDetailsComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  
}
