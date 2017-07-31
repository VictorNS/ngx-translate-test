import { NgxTranslateTestPage } from './app.po';

describe('ngx-translate-test App', () => {
  let page: NgxTranslateTestPage;

  beforeEach(() => {
    page = new NgxTranslateTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
