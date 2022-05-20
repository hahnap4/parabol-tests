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
    this.learnMore = page.locator('text=Learn More');
    this.startMeeting = page.locator('text=Start Meeting');
    this.rightButton = page.locator('.css-eq76j1 >> nth=2');
    this.leftButton = page.locator('.css-eq76j1 >> nth=1');
    this.backPageButton = page.locator('.css-eq76j1 >> nth=0');

  // Settings for Meeting Creation
    this.teamOptions = page.locator('.css-ut2dbg');
    this.myTeam = page.locator('role=menuitem >> .css-1g1i81b');
    this.templateEdit = page.locator('.css-1hqp667');
    this.includeIcebreaker = page.locator('.css-1czpd32');

  // Templates - General
  this.publicTabTemplate = page.locator('.css-1n2mv2k >> text=Public');
  this.orgTabTemplate = page.locator('.css-1n2mv2k >> text=Organization');
  this.teamTabTemplate = page.locator('.css-1n2mv2k >> text=Team');
  this.createNewTemplate = page.locator('.css-rpo5i9 >> text=Create New Template');
  this.defaultChosenTemplate = page.locator('.css-4q37dp');
  this.cloneEditTemplate = page.locator('.css-lq5sxx');
  this.useTemplate = page.locator('.css-1w75b52 >> text=Use Template');
  this.editTemplateTitle = page.locator('.css-1wsccn1');
  this.shareWithOrg = page.locator('.css-165whb0 >> nth=0');
  this.shareWithWorld = page.locator('.css-165whb0 >> nth=1');
  this.shareWithTeam = page.locator('.css-kng4ce');
  this.deleteTemplate = page.locator('.css-1tcaq0x');

  // Templates - Sprint Poker
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

  // Templates - Scale Creation for Sprint Poker
  this.newScaleNameEdit = page.locator('.css-86tyml >> nth=0');
  this.addValueForScale = page.locator('.css-73ctvc >> text=Add value');
  this.editNewlyMadeScaleValue = page.locator('.css-86tyml >> nth=1');
  this.removeNewlyMadeScaleValue = page.locator('.css-hxsl57');
  this.changeScaleValueColor = page.locator('.css-1s9hg00 >> nth=0');
  this.backToNewTemplate = page.locator('button[aria-label="Back to Template"]');

  // Templates - Retro
  this.addAnotherPrompt = page.locator('text=Add another prompt');
  this.editPromptTitle = page.locator('.css-nbyj04 >> nth=0');
  this.removePrompt = page.locator('.css-1vafts8 >> nth=0');
  this.changePromptColor = page.locator('.css-62shka >> nth=0');
  this.editPromptDescription = page.locator('.css-1xz6x59 >> text=Description');

  }

}

