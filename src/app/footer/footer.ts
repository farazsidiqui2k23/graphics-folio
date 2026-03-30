import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faFacebookF, faInstagram,  faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
}
