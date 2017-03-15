import { AtmospherePage } from './app.po';

describe('atmosphere App', () => {
  let page: AtmospherePage;

  beforeEach(() => {
    page = new AtmospherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
