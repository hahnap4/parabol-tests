import { Locator, Page } from '@playwright/test';

export class sprintPokerTemplatesPage {
  readonly page: Page;

  readonly addAnotherDimension: Locator;
  readonly editDimensionTitle: Locator;
  readonly removeFirstDimension: Locator;
  readonly openScaleList: Locator;
  readonly cloneDefaultScale: Locator;
  readonly tshirtSizes: Locator;
  readonly prioritiesScale: Locator;
  readonly fibonacciScale: Locator;
  readonly fiveFingers: Locator;
  readonly createScale: Locator;
  readonly editNewlyMadeScale: Locator;
  readonly deleteNewlyMadeScale: Locator;
  
  constructor(page: Page) {
    this.page = page;

  this.addAnotherDimension = page.locator('text=Add another dimension');
  this.editDimensionTitle = page.locator('.css-1vby7lt >> nth=0');
  this.removeFirstDimension = page.locator('.css-49avaq >> nth=0');
  this.openScaleList = page.locator('.css-13py4it >> nth=0');
  this.cloneDefaultScale = page.locator('.css-lq5sxx >> nth=0');
  this.tshirtSizes = page.locator('.css-1enschh >> text=T-Shirt Sizes');
  this.prioritiesScale = page.locator('.css-1enschh >> text=Priorities');
  this.fibonacciScale = page.locator('.css-1enschh >> text=Fibonacci');
  this.fiveFingers = page.locator('.css-1enschh >> text=Five Fingers');
  this.createScale = page.locator('.css-wbsup6 >> text=Create a Scale');
  this.editNewlyMadeScale = page.locator('.css-1tcaq0x >> nth=5');
  this.deleteNewlyMadeScale = page.locator('.css-1tcaq0x >> nth=6');
  }

}

