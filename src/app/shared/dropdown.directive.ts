import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement.lastChild, 'show');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement.lastChild, 'show');
    }
  }
}
