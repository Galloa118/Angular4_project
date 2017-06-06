import { CookbookPage } from './app.po';

describe('cookbook App', () => {
  let page: CookbookPage;

  beforeEach(() => {
    page = new CookbookPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
