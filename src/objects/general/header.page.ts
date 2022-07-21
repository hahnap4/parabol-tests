// Selectors for the header

const hamburgerIcon = 'button[aria-label="Toggle dashboard menu"]';
const removeSideNavOnMobile = '.css-r7qq99 >> nth=0'; //'button:has-text("menu")';

const ParabolLogo = 'button >> .css-1tiimx7';
const helpMenu = 'button[aria-label="Help menu"]';
const notificationBell = 'button[aria-label="Notifications"]';
const userIconButton = 'text=Add Meetinghelp_outlinenotifications >> button >> nth=3';
    
export {
  hamburgerIcon, removeSideNavOnMobile, ParabolLogo, helpMenu, 
  notificationBell, userIconButton
};