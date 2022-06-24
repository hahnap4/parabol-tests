// Selectors for the header

const hamburgerIcon = 'button[aria-label="Toggle dashboard menu"]';
const removeSideNavOnMobile = '.css-r7qq99'; //'button:has-text("menu")';

const ParabolLogo = 'button >> .css-1tiimx7';
const helpMenu = 'button[aria-label="Help menu"]';
const notificationBell = 'button[aria-label="Notifications"]';
const userIconButton = 'text=help_outlinenotifications >> button >> nth=2';
    
export {
  hamburgerIcon, removeSideNavOnMobile, ParabolLogo, helpMenu, 
  notificationBell, userIconButton
};