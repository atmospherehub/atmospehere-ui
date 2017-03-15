import { AtmospherePage } from './app.po';

describe('Atmosphere App', function() {
  let page: AtmospherePage;

  beforeEach(() => {
    page = new AtmospherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
