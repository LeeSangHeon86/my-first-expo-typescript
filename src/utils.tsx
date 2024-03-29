export const validateEmail = (email: string): boolean => {
  const regex =
    /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
  return regex.test(email);
};

export const removeWhitespace = (text: string): string => {
  const regex = /\s/g;
  return text.replace(regex, '');
};
