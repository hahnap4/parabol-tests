import { Locator, Page } from '@playwright/test';

export class createMeetingPage {
  readonly page: Page;

  // General
  readonly learnMore: Locator;
  readonly startMeeting: Locator;
  readonly rightButton: Locator;
  readonly leftButton: Locator;
  readonly backPageButton: Locator;

  // Settings for Meeting Creation
  readonly teamOptions: Locator;
  readonly myTeam: Locator;
  readonly templateEdit: Locator;
  readonly includeIcebreaker: Locator;

  // Templates - General
  readonly publicTabTemplate: Locator;
  readonly orgTabTemplate: Locator;
  readonly teamTabTemplate: Locator;
  readonly createNewTemplate: Locator;
  readonly defaultChosenTemplate: Locator;
  readonly cloneEditTemplate: Locator;
  readonly useTemplate: Locator;
  readonly editTemplateTitle: Locator;
  readonly shareWithOrg: Locator;
  readonly shareWithWorld: Locator;
  readonly shareWithTeam: Locator;
  readonly deleteTemplate: Locator;

  // Templates - Sprint Poker
  readonly addAnotherDimension: Locator;
  readonly editDimensionTitle: Locator;
  readonly removeDimension: Locator;
  readonly scaleList: Locator;
  readonly tshirtSizes: Locator;
  readonly prioritiesScale: Locator;
  readonly fibonacciScale: Locator;
  readonly fiveFingers: Locator;
  readonly createScale: Locator;
  readonly editNewlyMadeScale: Locator;
  readonly deleteNewlyMadeScale: Locator;

  // Templates - Scale Creation for Sprint Poker
  readonly newScaleNameEdit: Locator;
  readonly addValueForScale: Locator;
  readonly editNewlyMadeScaleValue: Locator;
  readonly removeNewlyMadeScaleValue: Locator;
  readonly changeScaleValueColor: Locator;
  readonly backToNewTemplate: Locator;

  // Templates - Retro
  readonly addAnotherPrompt: Locator;
  readonly editPromptTitle: Locator;
  readonly removePrompt: Locator;
  readonly changePromptColor: Locator;
  readonly editPromptDescription: Locator;
  
  constructor(page: Page) {
    this.page = page;

  // General
    this.learnMore = page.locator('');
    this.startMeeting = page.locator('');
    this.rightButton = page.locator('');
    this.leftButton = page.locator('');
    this.backPageButton = page.locator('');

  // Settings for Meeting Creation
    this.teamOptions = page.locator('');
    this.myTeam = page.locator('');
    this.templateEdit = page.locator('');
    this.includeIcebreaker = page.locator('');

  // Templates - General
  this.publicTabTemplate = page.locator('');
  this.orgTabTemplate = page.locator('');
  this.teamTabTemplate = page.locator('');
  this.createNewTemplate = page.locator('');
  this.defaultChosenTemplate = page.locator('');
  this.cloneEditTemplate = page.locator('');
  this.useTemplate = page.locator('');
  this.editTemplateTitle = page.locator('');
  this.shareWithOrg = page.locator('');
  this.shareWithWorld = page.locator('');
  this.shareWithTeam = page.locator('');
  this.deleteTemplate = page.locator('');

  // Templates - Sprint Poker
  this.addAnotherDimension = page.locator('');
  this.editDimensionTitle = page.locator('');
  this.removeDimension = page.locator('');
  this.scaleList = page.locator('');
  this.tshirtSizes = page.locator('');
  this.prioritiesScale = page.locator('');
  this.fibonacciScale = page.locator('');
  this.fiveFingers = page.locator('');
  this.createScale = page.locator('');
  this.editNewlyMadeScale = page.locator('');
  this.deleteNewlyMadeScale = page.locator('');

  // Templates - Scale Creation for Sprint Poker
  this.newScaleNameEdit = page.locator('');
  this.addValueForScale = page.locator('');
  this.editNewlyMadeScaleValue = page.locator('');
  this.removeNewlyMadeScaleValue = page.locator('');
  this.changeScaleValueColor = page.locator('');
  this.backToNewTemplate = page.locator('');

  // Templates - Retro
  this.addAnotherPrompt = page.locator('');
  this.editPromptTitle = page.locator('');
  this.removePrompt = page.locator('');
  this.changePromptColor = page.locator('');
  this.editPromptDescription = page.locator('');
  }

}

