import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MapComponent } from '../map/map.component';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-inquire',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MapComponent
  ],
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.scss'],
})
export class InquireComponent {
  // Get the actual HTML form element
  @ViewChild('inquireForm', { static: true }) inquireForm!: ElementRef<HTMLFormElement>;

  sendEmail(form: NgForm) {
    if (form.invalid) return;

    const serviceID = 'service_rzr9a9z';
    const templateID = 'template_bfm5ur9';
    const publicKey = 'ijZnlKASrsCIqp_3_';

    // Pass the nativeElement to EmailJS
    emailjs.sendForm(serviceID, templateID, this.inquireForm.nativeElement, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          form.resetForm();
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send email.');
        }
      );
  }
}
