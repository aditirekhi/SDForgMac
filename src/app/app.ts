import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar-component/navbar-component';
import { FooterComponent } from './core/layout/footer-component/footer-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('SDForgMac');
}
