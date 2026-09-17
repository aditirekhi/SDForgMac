import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SharedSectionHeaderComponent } from '../../../shared/components/shared-section-header-component/shared-section-header-component';

@Component({
  imports: [SharedSectionHeaderComponent],
  selector: 'process-component',
  styleUrl: './process-component.css',
  templateUrl: './process-component.html',
})
export class ProcessComponent implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const section = this.elementRef.nativeElement.querySelector<HTMLElement>('.process-section');
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
