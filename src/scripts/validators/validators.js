export function validateAge(age) {
  if (!age || age < 18 || age > 90 || !Number(age)) {
    return {
      title: 'Age',
      message: 'Age must be between 18 and 90 years old.',
    };
  }

  return false;
}

export function validateFullName(fullName) {
  if (!fullName || fullName.length < 4 || fullName.length > 40) {
    return {
      title: 'Full Name',
      message: 'Name must be between 4 and 40 characters long.',
    };
  }

  return false;
}

export function validatePosition(position) {
  if (!position || position.length < 2 || position.length > 40) {
    return {
      title: 'Position',
      message: 'Position must be between 2 and 40 characters long.',
    };
  }

  return false;
}

export function validateSalary(salary) {
  if (!salary || salary < 0 || salary > 1000000 || !Number(salary)) {
    return {
      title: 'Salary',
      message: 'Salary must be between 0 and 1,000,000.',
    };
  }

  return false;
}

export function validateOffice(office) {
  if (!office) {
    return {
      title: 'Office',
      message: 'Office can not be empty.',
    };
  }

  return false;
}
