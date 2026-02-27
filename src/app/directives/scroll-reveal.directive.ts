import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    @Input() revealDelay = 0;
    private observer!: IntersectionObserver;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.classList.add('reveal');
        if (this.revealDelay) {
            this.el.nativeElement.style.transitionDelay = `${this.revealDelay}s`;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
