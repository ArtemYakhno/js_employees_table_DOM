export function validateAge(age) {
  if (!age || age < 18 || age > 90 || !Number(age)) {
    return {
      title: 'Age',
      message: 'Age must be between 18 and 90 years old.',
    };
  }
}
