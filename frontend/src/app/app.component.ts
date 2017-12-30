import { Component } from '@angular/core';
import { QuestionsService } from './services/questions.service'
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public parentSubject: Subject<any> = new Subject();
  private question: object = this.questionsService.question
  private questions: object[] = this.questionsService.questions
  private questionIndex: number = this.questionsService.questionIndex
  private numberOfQuestions: number = this.questionsService.questions.length

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.question = this.questionsService.getQuestion(this.questionIndex)
  }

  nextQuestion(index) {
    this.questionIndex = index + 1
    this.question = this.questionsService.getQuestion(this.questionIndex)
  }

  previousQuestion(index) {
    this.questionIndex = index - 1
    this.question = this.questionsService.getQuestion(this.questionIndex)
  }

  changeQuestion(index) {
    this.questionIndex = index
    this.question = this.questionsService.getQuestion(this.questionIndex)
  }

  giveAnswer(e) {
    console.log(e)
    this.questions[e.index] = e.question
  }

  finishQuiz() {
    this.parentSubject.next('Finished!!!!');
    alert('Quiz finished!')
  }
}
