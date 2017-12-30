import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() parentSubject: Subject<any>

  private time: number = 0
  private start: object
  private ongoingTime: number
  private timeLimit: number = 100
  private testInProgress: boolean = true

  constructor() { }

  ngOnInit() {
    this.start = moment()
    this.ongoingTime
    this.parentSubject.subscribe(event => this.stopIncrementingTime());

    setInterval(() => {
      if (this.testInProgress) this.incrementTime(this.time)
    }, 1000);
  }

  incrementTime(time) {
    if (time === 100) {
      alert("Time's Up !!!")
      this.stopIncrementingTime()
    }
    this.time++
    this.ongoingTime = moment().diff(this.start, 'seconds')
  }

  stopIncrementingTime() {
    this.testInProgress = false
  }
}
