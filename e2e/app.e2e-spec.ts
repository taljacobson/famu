import { AngularUniversalWithFirebaseHostingPage } from './app.po';

describe('angular-universal-with-firebase-hosting App', () => {
  let page: AngularUniversalWithFirebaseHostingPage;

  beforeEach(() => {
    page = new AngularUniversalWithFirebaseHostingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
