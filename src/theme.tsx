const Colors = {
  white: '#ffffff',
  black: '#111111',
  main: '#3679fe',
  grey_0: '#d5d5d5',
  grey_1: '#a6a6a6',
  red: '#e84118',
};

const theme = {
  background: Colors.white,
  text: Colors.black,
  errorTet: Colors.red,

  // Button
  btnBackground: Colors.main,
  btnTitle: Colors.white,
  btnTitleLink: Colors.main,

  // Image
  imgBackground: Colors.grey_0,
  imgBtnBackground: Colors.grey_1,
  imgBtnIcon: Colors.white,

  // Input
  inputBackground: Colors.white,
  inputLabel: Colors.grey_1,
  inputPlaceholder: Colors.grey_1,
  inputBorder: Colors.grey_1,
};

interface themeType {
  background?: string;
  text?: string;
  errorTet?: string;
  btnBackground?: string;
  btnTitle?: string;
  btnTitleLink?: string;
  imgBackground?: string;
  inputBackground?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  inputBorder?: string;
  imgBtnBackground?: string;
  imgBtnIcon?: string;
}

export { theme, themeType };
