import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../../shared/components/shared-button-component/shared-button-component';
import { SharedSectionHeaderComponent } from '../../../shared/components/shared-section-header-component/shared-section-header-component';

@Component({
  imports: [SharedButtonComponent, SharedSectionHeaderComponent],
  selector: 'manufacturing-component',
  styleUrl: './manufacturing-component.css',
  templateUrl: './manufacturing-component.html',
})
export class ManufacturingComponent { }
