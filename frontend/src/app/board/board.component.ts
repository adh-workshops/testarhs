import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() questions
  @Output() changeQuestion = new EventEmitter()
  
  constructor() { }

  ngOnInit() {

  }

  changeQuestionEvent(index) {
    this.changeQuestion.emit(index)
  }


}
