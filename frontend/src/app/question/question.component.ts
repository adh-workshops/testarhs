import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionsService } from '../services/questions.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question
  @Input() questionIndex
  @Output() giveAnswerEvent = new EventEmitter()

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  giveAnswer(i) {
    this.question.answered = true
    this.question.answers.push(i)
    this.questionsService.questions[this.questionIndex] = this.question
    this.giveAnswerEvent.emit({
      index: this.questionIndex,
      question: this.question
    })
  }

  checkAnswers(i) {
    return this.question.answers.includes(i)
  }

}
