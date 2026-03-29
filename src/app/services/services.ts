import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      count: '01',
      title: 'Brand Identity',
      desc: 'Aims to develop brand identity that reflects your values and connects with your target audience through impactful designs.',
    },
    {
      count: '02',

      title: 'Social Media',
      desc: 'Creating engaging and visually appealing content that boosts brand awareness, increases engagement, and delivers impactful results.',
    },
    {
      count: '03',

      title: 'Logo Design',
      desc: 'Designing clean, modern, and minimalist logos that create a strong visual identity and leave a lasting impression for your brand.',
    },
    {
      count: '04',

      title: 'Visual Art',
      desc: 'Combining creativity and strategy to craft visually compelling designs that communicate your brand effectively.',
    },
  ];
}
