'use strict'

export type GenericInterfaceStyles<T> = {
  [P in keyof T]: { close: string; open: string };
} & { [key: string]: { close: string; open: string } };

type GenericInterface<T> = {
  [P in keyof T]: T[P];
};

const codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],
};

// memory inefficient, but TS otherwise wont show possible values for style  
const _ = {...codes} as Record<string, number[]>

type CodesGenericType = GenericInterface<typeof codes>;

const fillInStyles = (codes: CodesGenericType) => {
  const styles = {} as GenericInterfaceStyles<CodesGenericType>;
  for (const key in codes) {
    const value = _[key];
    styles[key] = {
      open: `\u001b[${value[0]}m`,
      close: `\u001b[${value[1]}m`,
    };
  }
  return styles;
};

export const styles: GenericInterfaceStyles<typeof codes> = fillInStyles(codes);
