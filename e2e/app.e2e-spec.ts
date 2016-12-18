import { GradeCalcPage } from './app.po';

describe('grade-calc App', function() {
  let page: GradeCalcPage;

  beforeEach(() => {
    page = new GradeCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
