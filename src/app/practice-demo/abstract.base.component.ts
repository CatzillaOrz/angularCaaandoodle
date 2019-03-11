import {Component} from '@angular/core'
enum Statuses {
  Unread = 0,
  Read = 1
}

export abstract class AbstractBaseComponent {
  statuses = Statuses;
  // someOtherEnum = SomeOtherEnum;
  // ... // lots of other reused stuff
}

@Component({
  selector: 'component-with-enum',
  template: `
    <div *ngFor="notification in notifications"
        [ngClass]="{'unread': notification.status == statuses.Unread}">
      {{ notification.text }}
    </div>
`
})
export class NotificationComponent extends AbstractBaseComponent {
  notifications = [
    {text: 'Hello!', status: Statuses.Unread},
    {text: 'Angular is awesome!', status: Statuses.Read}
  ];
}
