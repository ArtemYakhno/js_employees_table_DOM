export function validateFullName(fullName) {
  if (!fullName || fullName.length < 4 || fullName.length > 40) {
    return {
      title: 'Full Name',
      message: 'Name must be between 4 and 40 characters long.',
    };
  }
}
