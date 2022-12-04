// Objects
export {
  teamFilter,
} from '@pages/my-tasks/myTasksHeader.page';

export { 
    teamNameField, createTeamButton, createTeamAndOrgButton
  } from '@pages/add-a-team/createTeam.page';

export { 
    existingOrgRadioButton, openExistingOrgsList, myOrgChoice 
  } from '@pages/add-a-team/existingOrg.page';
  
export { 
    newOrgRadioButton, newOrgNameField 
  } from '@pages/add-a-team/newOrg.page';

export { 
    createAccountButton, signUpWithGoogle, signUpWithSSO, privacyPolicy, 
    signInInstead 
  } from '@pages/auth/createAccount.page';

export { 
    logoIcon, emailField, passwordField 
  } from '@pages/auth/generalAuth.page';

export { 
    signInButton, signInWithGoogle, signInWithSSO, forgotPassword, createAccountInstead 
  } from '@pages/auth/signIn.page';

export { 
    chosenTemplate, openTeamsList, selectAnotherTemplate, myTeamChoice, 
    includeIcebreakerCheckbox, blankIcebreakerCheckbox
  } from '@pages/setup-meeting/setupMeetingSettingWidget.page';
  
export { 
    learnMore, startMeetingButton, nextMeetingTypeButton, previousMeetingTypeButton, 
    backPageButton

  } from '@pages/setup-meeting/generalSetupMeeting.page';

export {
    publicTab, myOrgTab, myTeamTab, createNewTemplate, 
    cloneAndEditTemplate, useTemplateButton, editTemplateTitle, shareWithAllOfMyOrg, 
    shareWithWorld, shareWithMyTeam, deleteTemplateButton
  } from '@pages/setup-meeting/generalTemplatesPopup.page';

export{
    addAnotherPromptButton, editPromptTitle, removePrompt, changePromptColor, 
    editPromptDescription, defaultTemplate, startStopContinueTemplate
  } from '@pages/setup-meeting/retroTemplates.page';

export {
    editScaleName, addValueButton, editNewScaleValue, removeNewScaleValueButton, 
    changeScaleValueColor, backToNewTemplate
  } from '@pages/setup-meeting/scaleCreationSprintPokerTemplate.page';

export {
    addAnotherDimension, editDimensionTitle, removeFirstDimension, openScaleList, 
    cloneDefaultScale, tshirtSizesChoice, prioritiesChoice, fibonacciChoice, 
    fiveFingersChoice, createAScaleButton, editNewScale, deleteNewScale
  } from '@pages/setup-meeting/sprintPokerTemplates.page';

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
  } from '@pages/in-meeting/demo/demoSpecific.page';

export {
    tipsPopupBox, closeTipsButton, nextTopicButton, meetingName, endMeetingButton
  } from '@pages/in-meeting/general/generalInMeeting.page';

export {
    startField, stopField, continueField, firstReflectionBox, secondReflectionBox,
    thirdReflectionBox
  } from '@pages/in-meeting/retro/desktopSpecificReflectStage.page';

export {
    startFieldForMobile, stopFieldForMobile, continueFieldForMobile, goToFirstReflection, 
    goToSecondReflection, goToThirdReflection
  } from '@pages/in-meeting/retro/mobileSpecificReflectStage.page';

export {
    addMeetingButton, addMeetingButtonForMobile, activeMeetingBox, 
    tripleDotButtonOnActiveMeetingBox, copyActiveMeetingInviteLinkButton,
    retrospectiveDemoCard
  } from '@pages/meetings-homepage/meetingsHome.page';

export {
    upgradeToProButtonOnOrgList, addNewOrganization, 
  } from '@pages/org-list/orgList.page';  

export {
    archivedTasksButton, agendaButton
  } from '@pages/team-tasks-dashboard/teamTasksHeader.page';

export {
    sideQuoteBox, daysAgo, timelineMessageBox, tripleDotForMessage, archiveMeeting
  } from '@timeline/meetingSummary.page';

export {
    upgradeNowButton, quoteBox
  } from '@pages/upgrade-org-plan/billingTab.page';

export {
    deleteAccountButton, reasonForDeletionField, goodbyeForeverButton
  } from '@pages/user-profile/dangerZone.page';





// Fixtures
// export { test, expect } from '@fixtures/testSetup';

// Test Data
export { reason, randomStatement } from '@data/test_data.json';