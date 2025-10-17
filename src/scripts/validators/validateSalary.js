export function validateSalary(salary) {
  if (!salary || salary < 0 || salary > 1000000 || !Number(salary)) {
    return {
      title: 'Salary',
      message: 'Salary must be between 0 and 1,000,000.',
    };
  }
}
