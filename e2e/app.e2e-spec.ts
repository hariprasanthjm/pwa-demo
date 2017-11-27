import { SampleMaterialPage } from './app.po';

describe('sample-material App', () => {
  let page: SampleMaterialPage;

  beforeEach(() => {
    page = new SampleMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
