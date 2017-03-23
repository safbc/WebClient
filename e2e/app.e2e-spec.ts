import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  var expectedMsg: any = 'My First Angular App';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect<any>(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
