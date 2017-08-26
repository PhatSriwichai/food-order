import { FoodOrderWebPage } from './app.po';

describe('food-order-web App', () => {
  let page: FoodOrderWebPage;

  beforeEach(() => {
    page = new FoodOrderWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
