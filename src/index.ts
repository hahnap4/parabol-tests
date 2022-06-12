// signOut Task
export { SignOut } from '@tasks/signOut.task';

// startDemoReflectStage Task
export { StartDemoReflectStage } from '@tasks/startDemoReflectStage.task';

// startDemoGroupCardsStage Task
export { StartDemoGroupCardsStage } from '@tasks/startDemoGroupCardsStage.task';

// startDemoVotingStage Task
export { StartDemoVotingStage } from '@tasks/startDemoVotingStage.task';

// startDemoDiscussionsStage Task
export { StartDemoDiscussionStage } from '@tasks/startDemoDiscussionStage.task';

// goToUpgradeToProPage Task
export { GoToUpgradeToProPage } from '@tasks/goToUpgradeToProPage.task';

// goToUpgradeToProPageOnMobile Task
export { GoToUpgradeToProPageOnMobile } from '@tasks/goToUpgradeToProPageOnMobile.task';



// createTeam Objects
export { 
    teamNameField, createTeamButton 
  } from '@addATeam/createTeam.page';

// existingOrg Objects
export { 
    existingOrgRadioButton, openExistingOrgsList, myOrgChoice 
  } from '@addATeam/existingOrg.page';
  
// newOrg Objects
export { 
    newOrgRadioButton, newOrgNameField 
  } from '@addATeam/newOrg.page';

// createAccount Objects
export { 
    createAccountButton, signUpWithGoogle, signUpWithSSO, privacyPolicy, 
    signInInstead 
  } from '@authPage/createAccount.page';

// generalAuth Objects
export { 
    logoIcon, emailField, passwordField 
  } from '@authPage/generalAuth.page';

// signIn Objects
export { 
    signInButton, signInWithGoogle, signInWithSSO, forgotPassword, createAccountInstead 
  } from '@authPage/signIn.page';

// createMeetingSettingWidget Objects
export { 
    openTeamsList, selectAnotherTemplate, myTeamChoice, includeIcebreakerCheckbox
  } from '@createMeeting/createMeetingSettingWidget.page';
  
// generalCreateMeeting Objects
export { 
    learnMore, startMeetingButton, nextMeetingTypeButton, previousMeetingTypeButton, 
    backPageButton 
  } from '@createMeeting/generalCreateMeeting.page';

// generalTemplatesPopup Objects
export {
    publicTab, myOrgTab, myTeamTab, createNewTemplate, defaultTemplate, 
    cloneAndEditTemplate, useTemplateButton, editTemplateTitle, shareWithAllOfMyOrg, 
    shareWithWorld, shareWithMyTeam, deleteTemplateButton
  } from '@createMeeting/generalTemplatesPopup.page';

// retroTemplates Objects
export{
    addAnotherPromptButton, editPromptTitle, removePrompt, changePromptColor, 
    editPromptDescription
  } from '@createMeeting/retroTemplates.page';

// scaleCreationSprintPokerTemplate Objects
export {
    editScaleName, addValueButton, editNewScaleValue, removeNewScaleValueButton, 
    changeScaleValueColor, backToNewTemplate
  } from '@createMeeting/scaleCreationSprintPokerTemplate.page';

// sprintPokerTemplates Objects
export {
    addAnotherDimension, editDimensionTitle, removeFirstDimension, openScaleList, 
    cloneDefaultScale, tshirtSizesChoice, prioritiesChoice, fibonacciChoice, 
    fiveFingersChoice, createAScaleButton, editNewScale, deleteNewScale
  } from '@createMeeting/sprintPokerTemplates.page';

// header Objects
export {
    hamburgerIcon, hamburgerIconForMobile, ParabolLogo, helpMenu, 
    notificationBell, userIconButton
  } from '@general/header.page';

// sideNav Objects
export {
    upgradeToProButtonForMobile, meetingsButton, timelineButton, myTasksButton,
    myTeamTasksButton, addATeamButton
  } from '@general/sideNav.page';

// userMenuDropdown Objects
export {
    signOutButton, goToMyProfileButton, goToOrgListButton, upgradeToProButton
  } from '@general/userMenuDropdown.page';

// demoSpecific Objects
export {
    startDemoButton, endDemoButton
  } from '@inMeeting/demo/demoSpecific.page';

// general inMeeting Objects
export {
    tipsPopupBox, closeTipsButton, nextTopicButton
  } from '@inMeeting/general/generalInMeeting.page';

// desktopSpecificReflectStage Objects
export {
    startField, stopField, continueField
  } from '@inMeeting/retro/desktopSpecificReflectStage.page';

// mobileSpecificReflectStage Objects
export {
    startFieldForMobile, stopFieldForMobile, continueFieldForMobile, goToFirstReflection, 
    goToSecondReflection, goToThirdReflection
  } from '@inMeeting/retro/mobileSpecificReflectStage.page';
  
// meetingsHome Objects
export {
    addMeetingButton, addMeetingButtonForMobile, activeMeetingBox, 
    tripleDotButtonOnActiveMeetingBox, copyActiveMeetingInviteLinkButton
  } from '@meetingsHomepage/meetingsHome.page';

// orgList Objects
export {
    upgradeToProButtonOnOrgList
  } from '@orgList/orgList.page';  

// teamTasksHeader (Top Section) Objects
export {
    archivedTasksButton
  } from '@teamTasksDashboard/teamTasksHeader.page';

// meetingSummary Objects
export {
    sideQuoteBox, daysAgo
  } from '@timeline/meetingSummary.page';

// billingTab Objects
export {
    upgradeNowButton, quoteBox
  } from '@upgradeOrgPlan/billingTab.page';

// dangerZone Objects
export {
    deleteAccountButton, reasonForDeletionField, goodbyeForeverButton
  } from '@userProfile/dangerZone.page';





// Fixtures
export { test, expect } from '@fixtures/testSetup';

// Test Data
export { reason } from './data/test_data.json';





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