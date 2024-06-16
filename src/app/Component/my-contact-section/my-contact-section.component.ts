import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-my-contact-section',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './my-contact-section.component.html',
  styleUrl: './my-contact-section.component.css'
})
export class MyContactSectionComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
      // Handle form submission logic here
    }
  }

}
