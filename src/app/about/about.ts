import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  skills =[
    { logo: "\logo\webowolf-logo.png",  name: 'Adobe Photoshop', level: 90 },
    { logo: "\logo\webowolf-logo.png", name: 'Adobe Illustrator', level: 85 },
    { logo: "\logo\webowolf-logo.png", name: 'Canva', level: 95 },
    { logo: "\logo\webowolf-logo.png", name: 'CorelDRAW', level: 75 },
    { logo: "\logo\webowolf-logo.png", name: 'Sketch', level: 70 },
  ]
}
