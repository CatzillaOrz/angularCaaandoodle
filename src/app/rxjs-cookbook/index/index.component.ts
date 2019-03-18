import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);

    // Create observer object
    // const myObserver = {
    //   next: x => console.log('Observer got a next value: ' + x),
    //   error: err => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification')
    // };
    myObservable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );

    // Execute with the observer object
    // myObservable.subscribe(myObserver);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification

    // Create an Observable that will start listening to geolocation updates
    // when a consumer subscribes.
    // const locations = new Observable(observer => {
    //   // Get the next and error callbacks. These will be passed in when
    //   // the consumer subscribes.
    //   const { next, error } = observer;
    //   let watchId;

    //   // Simple geolocation API check provides values to publish
    //   if ('geolocation' in navigator) {
    //     watchId = navigator.geolocation.watchPosition(next, error);
    //   } else {
    //     error('Geolocation not available');
    //   }

    //   // When the consumer unsubscribes, clean up data ready for next subscription.
    //   return {
    //     unsubscribe() {
    //       navigator.geolocation.clearWatch(watchId);
    //     }
    //   };
    // });

    // // Call subscribe() to start listening for updates.
    // const locationsSubscription = locations.subscribe({
    //   next(position) {
    //     console.log('Current Position: ', position);
    //   },
    //   error(msg) {
    //     console.log('Error Getting Location: ', msg);
    //   }
    // });

    // // Stop listening for location after 10 seconds
    // setTimeout(() => {
    //   locationsSubscription.unsubscribe();
    // }, 10000);

    // // Create an Observable that will start listening to geolocation updates
    // // when a consumer subscribes.
    // // tslint:disable-next-line: member-ordering
    // const locations = new Observable(observer => {
    //   // Get the next and error callbacks. These will be passed in when
    //   // the consumer subscribes.
    //   const { next, error } = observer;
    //   let watchId;

    //   // Simple geolocation API check provides values to publish
    //   if ('geolocation' in navigator) {
    //     watchId = navigator.geolocation.watchPosition(next, error);
    //   } else {
    //     error('Geolocation not available');
    //   }

    //   // When the consumer unsubscribes, clean up data ready for next subscription.
    //   return {
    //     unsubscribe() {
    //       navigator.geolocation.clearWatch(watchId);
    //     }
    //   };
    // });

    // // Call subscribe() to start listening for updates.
    // // tslint:disable-next-line: member-ordering
    // const locationsSubscription = locations.subscribe({
    //   next(position) {
    //     console.log('Current Position: ', position);
    //   },
    //   error(msg) {
    //     console.log('Error Getting Location: ', msg);
    //   }
    // });

    // // Stop listening for location after 10 seconds
    // // tslint:disable-next-line: no-unused-expression
    // // tslint:disable-next-line: ban-comma-operator
    // // tslint:disable-next-line: no-unused-expression
    // setTimeout(() => {
    //   locationsSubscription.unsubscribe();
    // }, 10000);
  }
}
