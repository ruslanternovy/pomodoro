import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('pageNumber', [
      state('one', style({
        transform: 'translateX(-0%)',
      })),
      state('two', style({
        transform: 'translateX(-33.3%)',
      })),
      state('three', style({
        transform: 'translateX(-66.6%)',
      })),
      transition('* <=> *', [
        animate('500ms')
      ])
    ])
  ]
})
export class AppComponent {
  pageNumber = 'one'
  workDuration = 25;
  breakDuration = 5;
  minutes = this.workDuration - 1;
  seconds = 59
  interval: any = 0;
  message = 'start working';

  toggle(pageNumber: string) {
    this.pageNumber = pageNumber;
  }

  increase_focusTime() {
    this.workDuration += 1;
    this.minutes = this.workDuration - 1;
  }

  decrease_focusTime() {
    this.workDuration -= 1;
    this.minutes = this.workDuration - 1;
  }

  increase_breakTime() {
    this.breakDuration += 1;
  }

  decrease_breakTime() {
    this.breakDuration -= 1;
  }

  start() {
    this.interval = setInterval(() => counter(), 1000)

    const counter = () => {
      this.seconds--;
      if (this.seconds == 0) {
        this.minutes--;
        this.seconds = 59;
        if (this.minutes == 0) {
          this.message = "get some rest"
        }
      }
    }
  }
}
