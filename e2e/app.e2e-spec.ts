import { MarcColonyAppPage } from './app.po';

describe('marc-colony-app App', function() {
  let page: MarcColonyAppPage;

  beforeEach(() => {
    page = new MarcColonyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
