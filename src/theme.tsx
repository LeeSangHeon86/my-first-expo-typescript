const Colors = {
  white: '#ffffff',
  black: '#111111',
  main: '#3679fe',
};

const theme = {
  background: Colors.white,
  text: Colors.black,
};

interface themeType {
  background?: string | undefined;
  text?: string | undefined;
}

export { theme, themeType };
