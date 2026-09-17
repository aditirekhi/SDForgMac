import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { SharedButtonComponent } from '../../../shared/components/shared-button-component/shared-button-component';

@Component({
  imports: [SharedButtonComponent],
  selector: 'hero-component',
  styleUrl: './hero-component.css',
  templateUrl: './hero-component.html',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private counterTimer?: ReturnType<typeof setInterval>;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const statsRibbon = this.elementRef.nativeElement.querySelector<HTMLElement>('.stats-ribbon');
    if (!statsRibbon) return;

    if (typeof IntersectionObserver === 'undefined') {
      this.showStats(statsRibbon);
      return;
    }

    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      statsRibbon.classList.add('is-visible');
      this.showStats(statsRibbon);
      this.observer?.disconnect();
    }, { threshold: 0.35 });
    this.observer.observe(statsRibbon);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.counterTimer) clearInterval(this.counterTimer);
  }

  private showStats(statsRibbon: HTMLElement): void {
    const values = [10, 500, 1000];
    const labels = statsRibbon.querySelectorAll<HTMLElement>('.stats-value');
    const reducedMotion = typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      labels.forEach((label, index) => label.textContent = `${values[index]}+`);
      return;
    }

    const start = performance.now();
    const duration = 1400;
    this.counterTimer = setInterval(() => {
      const progress = Math.min((performance.now() - start) / duration, 1);
      labels.forEach((label, index) => {
        label.textContent = `${Math.round(values[index] * progress)}+`;
      });
      if (progress >= 1 && this.counterTimer) clearInterval(this.counterTimer);
    }, 30);
  }
}
