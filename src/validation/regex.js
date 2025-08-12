function isValidEmail({ email }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword({ password, confirmPassword }) {
  const passwordRegex = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  if (password != confirmPassword) return passwordRegex.test(password);
}

function isValidUsername({ username }) {
  const usernameRegex = /^(?=.*[A-Z])[A-Za-z0-9_]{4,}$/;
  return usernameRegex.test(username);
}
