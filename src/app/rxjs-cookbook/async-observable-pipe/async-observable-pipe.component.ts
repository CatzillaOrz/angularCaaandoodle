import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.scss']
})
export class AsyncObservablePipeComponent implements OnInit {
  // fixme
  // time = new Observable(observer =>
  //   setInterval(() => observer.next(new Date().toString()), 1000)
  // );
  constructor() {}

  ngOnInit() {}
}
