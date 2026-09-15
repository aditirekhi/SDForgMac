import { Component } from '@angular/core';
import { HeroComponent } from '../main-module/hero-component/hero-component';
import { ManufacturingComponent } from '../main-module/manufacturing-component/manufacturing-component';
import { WhySdforgmac } from '../main-module/why-sdforgmac/why-sdforgmac';

@Component({
  imports: [HeroComponent, ManufacturingComponent, WhySdforgmac],
  selector: 'main-component',
  styleUrl: './main-component.css',
  templateUrl: './main-component.html',
})
export class MainComponent { }
