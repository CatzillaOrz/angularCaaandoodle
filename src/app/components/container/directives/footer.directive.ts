import { NgStyle } from '@angular/common';
import { Directive, Input, OnChanges, OnInit, Self } from '@angular/core';

@Directive({
  selector: '[mj-footer]',
  providers: [NgStyle],
  host: { class: 'mj-footer' }
})
export class MjFooterDirective implements OnChanges, OnInit {

  @Input() height: string = '60px';
  private hostStyle: { [key: string]: string };
  constructor(@Self() private ngStyle: NgStyle) { }

  ngOnChanges(): void {
    this.doCheck();
  }
  ngOnInit(): void {
    this.doCheck();
  }
  doCheck() {
    this.hostStyle = {
      height: this.height
    };
    this.ngStyle.ngStyle = this.hostStyle;
    this.ngStyle.ngDoCheck();
  }
}
