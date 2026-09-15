import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../../shared/components/shared-button-component/shared-button-component';

@Component({
  imports: [SharedButtonComponent],
  selector: 'hero-component',
  styleUrl: './hero-component.css',
  templateUrl: './hero-component.html',
})
export class HeroComponent { }
