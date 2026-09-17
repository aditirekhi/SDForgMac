import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'shared-section-header-component',
  templateUrl: './shared-section-header-component.html',
})
export class SharedSectionHeaderComponent {
  color = input<'primary' | 'secondary' | 'tertiary' | 'metallic'>('secondary');
}
