import { QuestionairePage } from './app.po';

describe('questionaire App', () => {
  let page: QuestionairePage;

  beforeEach(() => {
    page = new QuestionairePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
