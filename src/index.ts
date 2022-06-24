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
    chosenTemplate, openTeamsList, selectAnotherTemplate, myTeamChoice, includeIcebreakerCheckbox
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
//export { test, expect } from '@fixtures/testSetup';

// Test Data
export { reason, randomStatement } from '@data/test_data.json';





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