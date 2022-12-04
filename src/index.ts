// Objects
export {
  teamFilter,
} from '@pages/my-tasks/my-tasks-header';

export { 
    teamNameField, createTeamButton, createTeamAndOrgButton
  } from '@pages/add-a-team/create-team';

export { 
    existingOrgRadioButton, openExistingOrgsList, myOrgChoice 
  } from '@pages/add-a-team/existing-org';
  
export { 
    newOrgRadioButton, newOrgNameField 
  } from '@pages/add-a-team/new-org';

export { 
    createAccountButton, signUpWithGoogle, signUpWithSSO, privacyPolicy, 
    signInInstead 
  } from '@pages/auth/create-account';

export { 
    logoIcon, emailField, passwordField 
  } from '@pages/auth/general-auth';

export { 
    signInButton, signInWithGoogle, signInWithSSO, forgotPassword, createAccountInstead 
  } from '@pages/auth/sign-in';

export { 
    chosenTemplate, openTeamsList, selectAnotherTemplate, myTeamChoice, 
    includeIcebreakerCheckbox, blankIcebreakerCheckbox
  } from '@pages/setup-meeting/setup-meeting-setting-widget';
  
export { 
    learnMore, startMeetingButton, nextMeetingTypeButton, previousMeetingTypeButton, 
    backPageButton

  } from '@pages/setup-meeting/general-setup-meeting';

export {
    publicTab, myOrgTab, myTeamTab, createNewTemplate, 
    cloneAndEditTemplate, useTemplateButton, editTemplateTitle, shareWithAllOfMyOrg, 
    shareWithWorld, shareWithMyTeam, deleteTemplateButton
  } from '@pages/setup-meeting/general-templates-popup';

export{
    addAnotherPromptButton, editPromptTitle, removePrompt, changePromptColor, 
    editPromptDescription, defaultTemplate, startStopContinueTemplate
  } from '@pages/setup-meeting/retro-templates';

export {
    editScaleName, addValueButton, editNewScaleValue, removeNewScaleValueButton, 
    changeScaleValueColor, backToNewTemplate
  } from '@pages/setup-meeting/scale-creation-sprint-poker-template';

export {
    addAnotherDimension, editDimensionTitle, removeFirstDimension, openScaleList, 
    cloneDefaultScale, tshirtSizesChoice, prioritiesChoice, fibonacciChoice, 
    fiveFingersChoice, createAScaleButton, editNewScale, deleteNewScale
  } from '@pages/setup-meeting/sprint-poker-templates';

export {
    hamburgerIcon, removeSideNavOnMobile, ParabolLogo, helpMenu, 
    notificationBell, userIconButton
  } from '@pages/general/header';

export {
    upgradeToProButtonForMobile, meetingsButton, timelineButton, myTasksButton,
    myTeamTasksButton, addATeamButton, profilePictureForMobile
  } from '@pages/general/side-nav';

export {
    signOutButton, goToMyProfileButton, goToOrgListButton, upgradeToProButton
  } from '@pages/general/user-menu-dropdown';

export {
    startDemoButton, endDemoButton
  } from '@pages/in-meeting/demo/demo-specific';

export {
    tipsPopupBox, closeTipsButton, nextTopicButton, meetingName, endMeetingButton
  } from '@pages/in-meeting/general/general-in-meeting';

export {
    startField, stopField, continueField, firstReflectionBox, secondReflectionBox,
    thirdReflectionBox
  } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';

export {
    startFieldForMobile, stopFieldForMobile, continueFieldForMobile, goToFirstReflection, 
    goToSecondReflection, goToThirdReflection
  } from '@pages/in-meeting/retro/mobile-specific-reflect-stage';

export {
    addMeetingButton, addMeetingButtonForMobile, activeMeetingBox, 
    tripleDotButtonOnActiveMeetingBox, copyActiveMeetingInviteLinkButton,
    retrospectiveDemoCard
  } from '@pages/meetings-homepage/meetings-homepage';

export {
    upgradeToProButtonOnOrgList, addNewOrganization, 
  } from '@pages/org-list/org-list';  

export {
    archivedTasksButton, agendaButton
  } from '@pages/team-tasks-dashboard/team-tasks-header';

export {
    sideQuoteBox, daysAgo, timelineMessageBox, tripleDotForMessage, archiveMeeting
  } from '@pages/timeline/meeting-summary';

export {
    upgradeNowButton, quoteBox
  } from '@pages/upgrade-org-plan/billing-tab';

export {
    deleteAccountButton, reasonForDeletionField, goodbyeForeverButton
  } from '@pages/user-profile/danger-zone';





// Fixtures
// export { test, expect } from '@fixtures/testSetup';

// Test Data
export { reason, randomStatement } from '@data/test_data.json';