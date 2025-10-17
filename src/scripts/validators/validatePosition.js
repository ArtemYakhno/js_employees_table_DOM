export function validatePosition(position) {
  if (!position || position.length < 2 || position.length > 40) {
    return {
      title: 'Position',
      message: 'Position must be between 2 and 40 characters long.',
    };
  }
}
