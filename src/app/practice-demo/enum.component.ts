import { Component } from "@angular/core";
enum Statuses {
  Unread = 0,
  Read = 1
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
export class NotificationComponent {
  notifications = [
    {text: 'Hello!', status: Statuses.Unread},
    {text: 'Angular is awesome!', status: Statuses.Read}
  ];
  statuses = Statuses
}
