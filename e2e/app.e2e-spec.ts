import { AscendPage } from './app.po';

describe('ascend App', function() {
  let page: AscendPage;

  beforeEach(() => {
    page = new AscendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
