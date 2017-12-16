import { Directive, HostListener, HostBinding } from '@angular/core';
import { _createNgProbe } from '@angular/platform-browser/src/dom/debug/ng_probe';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  constructor() {}

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
  }
}
