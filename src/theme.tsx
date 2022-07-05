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
  errorText: Colors.red,

  // Button
  btnBackground: Colors.main,
  btnTitle: Colors.white,
  btnTitleLink: Colors.main,
  btnSignout: Colors.red,

  // Image
  imgBackground: Colors.grey_0,
  imgBtnBackground: Colors.grey_1,
  imgBtnIcon: Colors.white,

  // Input
  inputBackground: Colors.white,
  inputLabel: Colors.grey_1,
  inputPlaceholder: Colors.grey_1,
  inputBorder: Colors.grey_1,
  inputDisabled: Colors.grey_0,

  // Spinner
  spinnerBackground: Colors.black,
  spinnerIndicator: Colors.white,

  // Tab
  tabBtnActive: Colors.main,
  tabBtnInActive: Colors.grey_1,

  // List - Item
  itemBorder: Colors.grey_0,
  itemTime: Colors.grey_1,
  itemDesc: Colors.grey_1,
  itemIcon: Colors.main,
};

interface themeType {
  background?: string;
  text?: string;
  errorText?: string;
  btnBackground?: string;
  btnTitle?: string;
  btnTitleLink?: string;
  btnSignout?: string;
  imgBackground?: string;
  inputBackground?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  inputBorder?: string;
  inputDisabled?: string;
  imgBtnBackground?: string;
  imgBtnIcon?: string;
  spinnerBackground?: string;
  spinnerIndicator?: string;
  tabBtnActive?: string;
  tabBtnInActive?: string;
  itemBorder?: string;
  itemTime?: string;
  itemDesc?: string;
  itemIcon?: string;
}

export { theme, themeType };
