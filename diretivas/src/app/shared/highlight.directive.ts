import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  constructor() {
  }

  @Input()
  defaultColor = 'white';
  // tslint:disable-next-line:no-input-rename
  @Input('highlight')
  highlightColor = 'blue';

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
