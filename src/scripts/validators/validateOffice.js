export function validateOffice(office) {
  if (!office) {
    return {
      title: 'Office',
      message: 'Office field cannot be empty.',
    };
  }
}
