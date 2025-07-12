import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactForm } from '../../components/contact-form/contact-form';
import { Map } from '../../components/map/map';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactForm, Map],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
