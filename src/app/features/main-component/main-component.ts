import { Component } from '@angular/core';
import { HeroComponent } from '../main-module/hero-component/hero-component';

@Component({
  imports: [HeroComponent],
  selector: 'main-component',
  styleUrl: './main-component.css',
  templateUrl: './main-component.html',
})
export class MainComponent { }
