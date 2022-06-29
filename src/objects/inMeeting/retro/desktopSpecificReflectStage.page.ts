// Desktop-Specific Selectors for the Retro Meeting with the "Start, Stop, Continue" Template (Same Template as Demo)

const startField = '[aria-label="Edit this reflection"] >> nth=0'; 
const stopField = '[aria-label="Edit this reflection"] >> nth=1'; 
const continueField = '[aria-label="Edit this reflection"] >> nth=3'; 

const firstReflectionBox = '.DraftEditor-editorContainer >> nth=1';
const secondReflectionBox = '.DraftEditor-editorContainer >> nth=3';
const thirdReflectionBox = '.DraftEditor-editorContainer >> nth=5';

export {
  startField, stopField, continueField, firstReflectionBox, secondReflectionBox,
  thirdReflectionBox
};