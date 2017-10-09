import { AutomatictestPage } from './app.po';

describe('automatictest App', () => {
  let page: AutomatictestPage;

  beforeEach(() => {
    page = new AutomatictestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
