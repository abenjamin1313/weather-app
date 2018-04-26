import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getTitle() {
    let headertwo = by.css('h2');
    return element(headertwo).getText();
  }

  getUnorderedlist() {
    let list = by.css('ul');
    return element(list).isPresent();
  }
}
