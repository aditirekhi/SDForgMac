import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SharedSectionHeaderComponent } from '../../../shared/components/shared-section-header-component/shared-section-header-component';

@Component({
  imports: [SharedSectionHeaderComponent],
  selector: 'why-sdforgmac',
  styleUrl: './why-sdforgmac.css',
  templateUrl: './why-sdforgmac.html',
})
export class WhySdforgmac implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const section = this.elementRef.nativeElement.querySelector<HTMLElement>('.why-sdforgmac-section');
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
