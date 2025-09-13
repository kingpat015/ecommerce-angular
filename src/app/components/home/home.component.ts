import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsComponent } from '../products/products.component';
import { InquireComponent } from '../inquire/inquire.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule,
    ProductDetailsComponent,
    ProductsComponent,
    InquireComponent,
    FooterComponent,
    AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Define slides for the carousel
  slides = [
    { image: 'assets/carousel_1.jpg', title: 'First Slide' },
    { image: 'assets/carousel_2.jpg', title: 'Second Slide' },
    { image: 'assets/carousel_3.jpg', title: 'Third Slide' },
  ];
}
