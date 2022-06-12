// Selectors for the header

const hamburgerIcon = 'button[aria-label="Toggle dashboard menu"]';
const hamburgerIconForMobile = 'button:has-text("menu")';

const ParabolLogo = 'button >> .css-1tiimx7';
const helpMenu = 'button[aria-label="Help menu"]';
const notificationBell = 'button[aria-label="Notifications"]';
const userIconButton = 'text=help_outlinenotifications >> button >> nth=2';
    
export {
  hamburgerIcon, hamburgerIconForMobile, ParabolLogo, helpMenu, 
  notificationBell, userIconButton
};