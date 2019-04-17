import { NgStyle } from '@angular/common';
import { Directive, OnChanges, OnInit, Input, Self } from '@angular/core';

@Directive({
  selector: '[mj-header]',
  providers: [NgStyle],
  host: {class: 'mj-header'}
})
export class MjHeaderDirective implements OnChanges, OnInit{
  @Input() height: string = '60px';
  constructor(@Self() private ngStyle: NgStyle) { }
  private hostStyle: {[key: string]: string};

  ngOnChanges(): void {
    this.doCheck();
  }
  doCheck() {
    this.hostStyle = {
      height: this.height
    };
    this.ngStyle.ngStyle = this.hostStyle;
    this.ngStyle.ngDoCheck();
  }
  ngOnInit(): void {
    this.doCheck();
  }


}
