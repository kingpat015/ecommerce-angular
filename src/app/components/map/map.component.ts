import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true, // ✅ importante kapag may imports ka dito
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'] // ✅ dapat plural
})
export class MapComponent {
  center: google.maps.LatLngLiteral = {
    lat: 14.5995,
    lng: 120.9842
  };
  zoom = 13;
}
