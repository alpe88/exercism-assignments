//
// This function is meant to match resistor band colors as a solution to excercise 3.
//

export const colorCode = (color) => {
  return COLORS.findIndex(resistorColor => resistorColor === color);
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]; 