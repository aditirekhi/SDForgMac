import { Component } from '@angular/core';
import { SharedSectionHeaderComponent } from '../../../shared/components/shared-section-header-component/shared-section-header-component';
import { SharedButtonComponent } from '../../../shared/components/shared-button-component/shared-button-component';

@Component({
  imports: [SharedSectionHeaderComponent, SharedButtonComponent],
  selector: 'about-us',
  styleUrl: './about-us.css',
  templateUrl: './about-us.html',
})
export class AboutUs { }
