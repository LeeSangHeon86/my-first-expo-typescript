const Colors = {
  white: '#ffffff',
  black: '#111111',
  main: '#3679fe',
  grey: '#d5d5d5',
};

const theme = {
  background: Colors.white,
  text: Colors.black,

  // Button
  btnBackground: Colors.main,
  btnTitle: Colors.white,
  btnTitleLink: Colors.main,

  // Image
  imgBackground: Colors.grey,
};

interface themeType {
  background?: string;
  text?: string;
  btnBackground?: string;
  btnTitle?: string;
  btnTitleLink?: string;
  imgBackground?: string;
}

export { theme, themeType };
