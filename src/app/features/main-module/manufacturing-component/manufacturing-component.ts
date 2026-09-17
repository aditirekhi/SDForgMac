import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SharedButtonComponent } from '../../../shared/components/shared-button-component/shared-button-component';
import { SharedSectionHeaderComponent } from '../../../shared/components/shared-section-header-component/shared-section-header-component';

@Component({
  imports: [SharedButtonComponent, SharedSectionHeaderComponent],
  selector: 'manufacturing-component',
  styleUrl: './manufacturing-component.css',
  templateUrl: './manufacturing-component.html',
})
export class ManufacturingComponent implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const section = this.elementRef.nativeElement.querySelector<HTMLElement>('.manufacturing-section');
    if (!section || typeof IntersectionObserver === 'undefined') {
      section?.classList.add('is-visible');
      return;
    }
    section.classList.add('motion-ready');
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      section.classList.add('is-visible');
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(section);
  }
}
