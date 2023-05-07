export const validatePassword = ( password: string ) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$/;
  return regex.test(password);
};

export const isValidEmail = ( email: string ) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
