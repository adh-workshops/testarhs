import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressBarModule, MdCardModule, MdGridListModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsService } from './services/questions.service';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    QuestionComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdProgressBarModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
