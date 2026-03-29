import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  imports: [CommonModule],
  templateUrl: './works.html',
  styleUrl: './works.css',
})
export class Works {
  worksCategory = ['All', 'Branding', 'Social Media', 'Logo Design', 'Visual Art'];
  defaultCategory = 'All';

  selectCategory(category: string) {
    this.defaultCategory = category;
    console.log(this.defaultCategory);
  }

  works = [
    {
      count: '01',
      title: 'Digital Branding',
      desc: 'Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.',
    },
    {
      count: '02',

      title: 'Visual Design',
      desc: 'Blend of artistic intuition with strategic insight to craft a visual identity.',
    },
    {
      count: '03',

      title: 'UX Research',
      desc: 'Blend of functionality with aesthetics to create delightful experience.',
    },
    {
      count: '04',

      title: 'Art Direction',
      desc: 'Blend of strategic thinking and artistic finesse to craft a visual identity that goes beyond aesthetics.',
    },
  ];
}
