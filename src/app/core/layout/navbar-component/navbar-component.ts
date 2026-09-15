import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../../shared/components/shared-button-component/shared-button-component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SharedButtonComponent, RouterLink],
  selector: 'navbar-component',
  styleUrl: './navbar-component.css',
  templateUrl: './navbar-component.html',
})
export class NavbarComponent { }
