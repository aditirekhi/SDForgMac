import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'shared-button-component',
  styleUrl: './shared-button-component.css',
  templateUrl: './shared-button-component.html',
})
export class SharedButtonComponent {
  buttonClass = input<string>('');
  addIcon = input<boolean>(false);
  leftIcon = input<boolean>(false);
  iconOnly = input<boolean>(false);
  iconClass = input<string>('');
}
