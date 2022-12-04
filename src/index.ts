// Objects
export {
  teamFilter,
} from '@myTasks/myTasksHeader.page';

export { 
    teamNameField, createTeamButton, createTeamAndOrgButton
  } from '@addATeam/createTeam.page';

export { 
    existingOrgRadioButton, openExistingOrgsList, myOrgChoice 
  } from '@addATeam/existingOrg.page';
  
export { 
    newOrgRadioButton, newOrgNameField 
  } from '@addATeam/newOrg.page';

export { 
    createAccountButton, signUpWithGoogle, signUpWithSSO, privacyPolicy, 
    signInInstead 
  } from '@authPage/createAccount.page';

export { 
    logoIcon, emailField, passwordField 
  } from '@authPage/generalAuth.page';

export { 
    signInButton, signInWithGoogle, signInWithSSO, forgotPassword, createAccountInstead 
  } from '@authPage/signIn.page';

export { 
    chosenTemplate, openTeamsList, selectAnotherTemplate, myTeamChoice, 
    includeIcebreakerCheckbox, blankIcebreakerCheckbox
  } from '@pages/setupMeeting/setupMeetingSettingWidget.page';
  
export { 
    learnMore, startMeetingButton, nextMeetingTypeButton, previousMeetingTypeButton, 
    backPageButton

  } from '@pages/setupMeeting/generalSetupMeeting.page';

export {
    publicTab, myOrgTab, myTeamTab, createNewTemplate, 
    cloneAndEditTemplate, useTemplateButton, editTemplateTitle, shareWithAllOfMyOrg, 
    shareWithWorld, shareWithMyTeam, deleteTemplateButton
  } from '@pages/setupMeeting/generalTemplatesPopup.page';

export{
    addAnotherPromptButton, editPromptTitle, removePrompt, changePromptColor, 
    editPromptDescription, defaultTemplate, startStopContinueTemplate
  } from '@pages/setupMeeting/retroTemplates.page';

export {
    editScaleName, addValueButton, editNewScaleValue, removeNewScaleValueButton, 
    changeScaleValueColor, backToNewTemplate
  } from '@pages/setupMeeting/scaleCreationSprintPokerTemplate.page';

export {
    addAnotherDimension, editDimensionTitle, removeFirstDimension, openScaleList, 
    cloneDefaultScale, tshirtSizesChoice, prioritiesChoice, fibonacciChoice, 
    fiveFingersChoice, createAScaleButton, editNewScale, deleteNewScale
  } from '@pages/setupMeeting/sprintPokerTemplates.page';

export {
    hamburgerIcon, removeSideNavOnMobile, ParabolLogo, helpMenu, 
    notificationBell, userIconButton
  } from '@general/header.page';

export {
    upgradeToProButtonForMobile, meetingsButton, timelineButton, myTasksButton,
    myTeamTasksButton, addATeamButton, profilePictureForMobile
  } from '@general/sideNav.page';

export {
    signOutButton, goToMyProfileButton, goToOrgListButton, upgradeToProButton
  } from '@general/userMenuDropdown.page';

export {
    startDemoButton, endDemoButton
  } from '@inMeeting/demo/demoSpecific.page';

export {
    tipsPopupBox, closeTipsButton, nextTopicButton, meetingName, endMeetingButton
  } from '@inMeeting/general/generalInMeeting.page';

export {
    startField, stopField, continueField, firstReflectionBox, secondReflectionBox,
    thirdReflectionBox
  } from '@inMeeting/retro/desktopSpecificReflectStage.page';

export {
    startFieldForMobile, stopFieldForMobile, continueFieldForMobile, goToFirstReflection, 
    goToSecondReflection, goToThirdReflection
  } from '@inMeeting/retro/mobileSpecificReflectStage.page';

export {
    addMeetingButton, addMeetingButtonForMobile, activeMeetingBox, 
    tripleDotButtonOnActiveMeetingBox, copyActiveMeetingInviteLinkButton,
    retrospectiveDemoCard
  } from '@meetingsHomepage/meetingsHome.page';

export {
    upgradeToProButtonOnOrgList, addNewOrganization, 
  } from '@orgList/orgList.page';  

export {
    archivedTasksButton, agendaButton
  } from '@teamTasksDashboard/teamTasksHeader.page';

export {
    sideQuoteBox, daysAgo, timelineMessageBox, tripleDotForMessage, archiveMeeting
  } from '@timeline/meetingSummary.page';

export {
    upgradeNowButton, quoteBox
  } from '@upgradeOrgPlan/billingTab.page';

export {
    deleteAccountButton, reasonForDeletionField, goodbyeForeverButton
  } from '@userProfile/dangerZone.page';





// Fixtures
// export { test, expect } from '@fixtures/testSetup';

// Test Data
export { reason, randomStatement } from '@data/test_data.json';