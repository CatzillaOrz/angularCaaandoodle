import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  template: `
    <div class="zippy">
      <div (click)="toggle()">Toggle</div>
      <div [hidden]="!visible">
        show off
        <!-- <ng-content></ng-content> -->
      </div>
    </div>
  `,
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {
  visible = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
  ngOnInit() {}
}
