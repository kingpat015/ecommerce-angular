import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; 
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-inquire',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MapComponent],
  templateUrl: './inquire.component.html',
  styleUrl: './inquire.component.scss',
})
export class InquireComponent {}
