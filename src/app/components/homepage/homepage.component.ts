import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
// import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HomeComponent, ProductsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
