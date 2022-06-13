// Tasks
export { SignOut } from '@tasks/auth/signOut/desktop/signOut.task';
export { SignOutOnMobile } from '@tasks/auth/signOut/mobile/signOut.task';
export { StartDemoReflectStage } from '@tasks/demo/fixtures/startDemoReflectStage.task';
export { StartDemoGroupCardsStage } from '@tasks/demo/fixtures/startDemoGroupCardsStage.task';
export { StartDemoVotingStage } from '@tasks/demo/fixtures/startDemoVotingStage.task';
export { StartDemoDiscussionStage } from '@tasks/demo/fixtures/startDemoDiscussionStage.task';
export { GoToMeetingsHomepage } from '@tasks/goToPages/desktop/goToMeetingsHomepage.task';
export { GoToMyTasksPage } from '@tasks/goToPages/desktop/goToMyTasksPage.task';
export { GoToMyTeamTasksPage } from '@tasks/goToPages/desktop/goToMyTeamTasksPage.task';
export { GoToAddATeamPage } from '@tasks/goToPages/desktop/goToAddATeamPage.task';
export { GoToMyProfilePage } from '@tasks/goToPages/desktop/goToMyProfilePage.task';
export { GoToOrgListPage } from '@tasks/goToPages/desktop/goToOrgListPage.task';
export { GoToSprintPokerMeetingCreationPage } from '@tasks/goToPages/desktop/goToSprintPokerMeetingSetupPage.task';
export { GoToRetroMeetingCreationPage } from '@tasks/goToPages/desktop/goToRetroMeetingSetupPage.task';
export { GoToCheckInMeetingSetupPage } from '@tasks/goToPages/desktop/goToCheckInMeetingSetupPage.task';
export { GoToTimelinePage } from '@tasks/goToPages/desktop/goToTimelinePage.task';
export { GoToUpgradeToProPage } from '@tasks/goToPages/desktop/goToUpgradeToProPage.task'; 
export { SignIn } from '@tasks/auth/signIn.task';
export { GoToAddATeamOnMobile } from '@tasks/goToPages/mobile/goToAddATeamOnMobile.task';
export { GoToCheckInSetupOnMobile } from '@tasks/goToPages/mobile/goToCheckInSetupOnMobile.task';
export { GoToMeetingsHomepageOnMobile } from '@tasks/goToPages/mobile/goToMeetingsHomepageOnMobile.task';
export { GoToMyProfileOnMobile } from '@tasks/goToPages/mobile/goToMyProfileOnMobile.task';
export { GoToMyTasksOnMobile } from '@tasks/goToPages/mobile/goToMyTasksOnMobile.task';
export { GoToMyTeamTasksOnMobile } from '@tasks/goToPages/mobile/goToMyTeamTasksOnMobile.task';
export { GoToOrgListOnMobile } from '@tasks/goToPages/mobile/goToOrgListOnMobile.task';
export { GoToRetroSetupOnMobile } from '@tasks/goToPages/mobile/goToRetroSetupOnMobile.task';
export { GoToSprintPokerSetupOnMobile } from '@tasks/goToPages/mobile/goToSprintPokerSetupOnMobile.task';
export { GoToTimelineOnMobile } from '@tasks/goToPages/mobile/goToTimelineOnMobile.task';
export { GoToUpgradeToProPageOnMobile } from '@tasks/goToPages/mobile/goToUpgradeToProPageOnMobile.task';
export { CreateAccount } from '@tasks/auth/createAccount.task';
export { DeleteAccount } from '@tasks/auth/deleteAccount.task';
export { EndDemoRetroMeeting } from '@tasks/demo/endDemoRetroMeeting.task';
export { FillOutReflectionInStopColumn } from '@tasks/demo/reflectStage/desktop/fillOutReflectionInStopColumn.task';
export { FillOutReflectionInContinueColumn } from '@tasks/demo/reflectStage/desktop/fillOutReflectionInContinueColumn.task';
export { FillOutReflectionInStartColumn } from '@tasks/demo/reflectStage/desktop/fillOutReflectionInStartColumn.task';
export { FillOutReflectionInStartColumnOnMobile } from '@tasks/demo/reflectStage/mobile/fillOutReflectionInStartColumnOnMobile.task';
export { FillOutReflectionInContinueColumnOnMobile } from '@tasks/demo/reflectStage/mobile/fillOutReflectionInContinueColumnOnMobile.task';
export { FillOutReflectionInStopColumnOnMobile } from '@tasks/demo/reflectStage/mobile/fillOutReflectionInStopColumnOnMobile.task';
export { GoToContinueColumn } from '@tasks/demo/reflectStage/mobile/GoToContinueColumn.task';
export { GoToStartColumn } from '@tasks/demo/reflectStage/mobile/GoToStartColumn.task';
export { GoToStopColumn } from '@tasks/demo/reflectStage/mobile/GoToStopColumn.task';

// Objects
export { 
    teamNameField, createTeamButton 
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
    openTeamsList, selectAnotherTemplate, myTeamChoice, includeIcebreakerCheckbox
  } from '@pages/setupMeeting/setupMeetingSettingWidget.page';
  
export { 
    learnMore, startMeetingButton, nextMeetingTypeButton, previousMeetingTypeButton, 
    backPageButton 
  } from '@pages/setupMeeting/generalSetupMeeting.page';

export {
    publicTab, myOrgTab, myTeamTab, createNewTemplate, defaultTemplate, 
    cloneAndEditTemplate, useTemplateButton, editTemplateTitle, shareWithAllOfMyOrg, 
    shareWithWorld, shareWithMyTeam, deleteTemplateButton
  } from '@pages/setupMeeting/generalTemplatesPopup.page';

export{
    addAnotherPromptButton, editPromptTitle, removePrompt, changePromptColor, 
    editPromptDescription
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
    hamburgerIcon, hamburgerIconForMobile, ParabolLogo, helpMenu, 
    notificationBell, userIconButton
  } from '@general/header.page';

export {
    upgradeToProButtonForMobile, meetingsButton, timelineButton, myTasksButton,
    myTeamTasksButton, addATeamButton
  } from '@general/sideNav.page';

export {
    signOutButton, goToMyProfileButton, goToOrgListButton, upgradeToProButton
  } from '@general/userMenuDropdown.page';

export {
    startDemoButton, endDemoButton
  } from '@inMeeting/demo/demoSpecific.page';

export {
    tipsPopupBox, closeTipsButton, nextTopicButton
  } from '@inMeeting/general/generalInMeeting.page';

export {
    startField, stopField, continueField
  } from '@inMeeting/retro/desktopSpecificReflectStage.page';

export {
    startFieldForMobile, stopFieldForMobile, continueFieldForMobile, goToFirstReflection, 
    goToSecondReflection, goToThirdReflection
  } from '@inMeeting/retro/mobileSpecificReflectStage.page';

export {
    addMeetingButton, addMeetingButtonForMobile, activeMeetingBox, 
    tripleDotButtonOnActiveMeetingBox, copyActiveMeetingInviteLinkButton
  } from '@meetingsHomepage/meetingsHome.page';

export {
    upgradeToProButtonOnOrgList
  } from '@orgList/orgList.page';  

export {
    archivedTasksButton
  } from '@teamTasksDashboard/teamTasksHeader.page';

export {
    sideQuoteBox, daysAgo
  } from '@timeline/meetingSummary.page';

export {
    upgradeNowButton, quoteBox
  } from '@upgradeOrgPlan/billingTab.page';

export {
    deleteAccountButton, reasonForDeletionField, goodbyeForeverButton
  } from '@userProfile/dangerZone.page';





// Fixtures
export { test, expect } from '@fixtures/testSetup';

// Test Data
export { reason, randomStatement} from '@data/test_data.json';





// Screenplay
import {
    Actor, Action, Task, Question, Ability,
} from '@testla/screenplay';

import { BrowseTheWeb } from '@web/abilities/BrowseTheWeb';
import { Check } from '@web/actions/Check';
import { Click } from '@web/actions/Click';
import { DoubleClick } from '@web/actions/DoubleClick';
import { DragAndDrop } from '@web/actions/DragAndDrop';
import { Fill } from '@web/actions/Fill';
import { Hover } from '@web/actions/Hover';
import { Press } from '@web/actions/Press';
import { Navigate } from '@web/actions/Navigate';
import { Type } from '@web/actions/Type';
import { Wait } from '@web/actions/Wait';
import { Element } from '@web/questions/Element';

import { SelectorOptions, SubSelector } from '@web/types';
import { recursiveLocatorLookup } from '@web/utils';

import { UseAPI } from '@api/abilities/UseAPI';
import { ARequest } from '@api/actions/ARequest';
import { Delete } from '@api/actions/Delete';
import { Get } from '@api/actions/Get';
import { Head } from '@api/actions/Head';
import { Patch } from '@api/actions/Patch';
import { Post } from '@api/actions/Post';
import { Put } from '@api/actions/Put';
import { APIResponse } from '@api/questions/APIResponse';

import { RequestMethod, REQUEST_METHOD } from '@api/constants';
import {
    Headers, Response, ResponseBodyFormat, ResponseBodyType,
} from '@api/types';

export {
    Actor, Action, Task, Question, Ability, BrowseTheWeb, Check, Wait, Hover, Navigate, Fill, Press, DragAndDrop, Click, DoubleClick, Type, Element,
    UseAPI, ARequest, Delete, Get, Head, Patch, Post, Put, APIResponse, Headers, RequestMethod, REQUEST_METHOD, Response, ResponseBodyFormat, 
    ResponseBodyType, SelectorOptions, recursiveLocatorLookup, SubSelector
};