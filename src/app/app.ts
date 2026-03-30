import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Works } from './works/works';
import { Services } from './services/services';
import { About } from './about/about';
import { Marquee } from './marquee/marquee';
import { FormSec } from './form-sec/form-sec';
import { Footer } from './footer/footer';



@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Works,
    Services,
    About,
    Marquee,
    FormSec,
    Footer,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('graphics_folio');
}
