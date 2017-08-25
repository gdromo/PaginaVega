import { PaginaVegaPage } from './app.po';

describe('pagina-vega App', function() {
  let page: PaginaVegaPage;

  beforeEach(() => {
    page = new PaginaVegaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
