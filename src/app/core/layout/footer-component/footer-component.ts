import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../../shared/components/shared-button-component/shared-button-component';

@Component({
  imports: [SharedButtonComponent],
  selector: 'footer-component',
  styleUrl: './footer-component.css',
  templateUrl: './footer-component.html',
})
export class FooterComponent { }
