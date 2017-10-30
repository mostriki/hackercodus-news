import { HackercodusNewsPage } from './app.po';

describe('hackercodus-news App', () => {
  let page: HackercodusNewsPage;

  beforeEach(() => {
    page = new HackercodusNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
