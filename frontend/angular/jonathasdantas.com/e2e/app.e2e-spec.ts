import { Jonathasdantas.ComPage } from './app.po';

describe('jonathasdantas.com App', () => {
  let page: Jonathasdantas.ComPage;

  beforeEach(() => {
    page = new Jonathasdantas.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
