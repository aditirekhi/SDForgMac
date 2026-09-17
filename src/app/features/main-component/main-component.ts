import { Component } from '@angular/core';
import { HeroComponent } from '../main-module/hero-component/hero-component';
import { ManufacturingComponent } from '../main-module/manufacturing-component/manufacturing-component';
import { WhySdforgmac } from '../main-module/why-sdforgmac/why-sdforgmac';
import { ApplicationsComponent } from '../main-module/applications-component/applications-component';
import { ProcessComponent } from '../main-module/process-component/process-component';
import { AboutUs } from '../main-module/about-us/about-us';

@Component({
  imports: [HeroComponent, ManufacturingComponent, WhySdforgmac, ApplicationsComponent, ProcessComponent, AboutUs],
  selector: 'main-component',
  templateUrl: './main-component.html',
})
export class MainComponent { }
