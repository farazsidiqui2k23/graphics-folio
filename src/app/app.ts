import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Works } from './works/works';
import { Services } from './services/services';


@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Works,
    Services
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('graphics_folio');
}
