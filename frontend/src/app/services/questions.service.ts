import { Injectable } from "@angular/core";

@Injectable()
export class QuestionsService {
	public questionIndex = 0
	public question: object
	public questions = [{
		question: "what is going on?",
		answered: false,
		answers: [],
		possibleAnswers: [
			{ answer: "ans 1" },
			{ answer: "ans 2" },
			{ answer: "ans 3" },
		]
	}, {
		question: "what is going on 2?",
		answered: false,
		answers: [],
		possibleAnswers: [
			{ answer: "ans 1" },
			{ answer: "ans 2" },
			{ answer: "ans 3" },
		]
	}, {
		question: "what is going on 3?",
		answered: false,
		answers: [],
		possibleAnswers: [
			{ answer: "ans 1" },
			{ answer: "ans 2" },
			{ answer: "ans 3" },
		]
	}, {
		question: "what is going on 4?",
		answered: false,
		answers: [],
		possibleAnswers: [
			{ answer: "ans 1" },
			{ answer: "ans 2" },
			{ answer: "ans 3" },
		]
	}, {
		question: "what is going on 5?",
		answered: false,
		answers: [],
		possibleAnswers: [
			{ answer: "ans 1" },
			{ answer: "ans 2" },
			{ answer: "ans 3" },
		]
	}, {
		question: "what is going on 6?",
		answered: false,
		answers: [],
		possibleAnswers: [
			{ answer: "ans 1" },
			{ answer: "ans 2" },
			{ answer: "ans 3" },
		]
	}, {
		question: "what is going on 7?",
		answered: false,
		answers: [],
		possibleAnswers: [
			{ answer: "ans 1" },
			{ answer: "ans 2" },
			{ answer: "ans 3" },
		]
	}]

	getQuestion(index) {
		return this.questions[index]
	}

	getAllQuestions() {
		return this.questions
	}
}