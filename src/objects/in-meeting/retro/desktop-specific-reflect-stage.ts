// Desktop-Specific Selectors for the Retro Meeting with the "Start, Stop, Continue" Template (Same Template as Demo)

const startField = 'role=textbox[name="Edit this reflection"]:left-of(role=textbox[name="Edit this reflection"] >> nth=1)'; 
const stopField = 'role=textbox[name="Edit this reflection"] >> nth=1'; 
const continueField = 'role=textbox[name="Edit this reflection"] >> nth=2'; 

const firstReflectionBox = '.DraftEditor-editorContainer >> nth=1';
const secondReflectionBox = '.DraftEditor-editorContainer >> nth=3';
const thirdReflectionBox = '.DraftEditor-editorContainer >> nth=5';

export {
  startField, stopField, continueField, firstReflectionBox, secondReflectionBox,
  thirdReflectionBox
};