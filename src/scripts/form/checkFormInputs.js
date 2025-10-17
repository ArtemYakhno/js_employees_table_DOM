import {
  validateFullName,
  validatePosition,
  validateOffice,
  validateAge,
  validateSalary,
} from '../validators/validators';

export const checkFormInputs = ({
  fullName,
  position,
  office,
  age,
  salary,
} = {}) => {
  const errors = [];

  errors.push(validateFullName(fullName));
  errors.push(validatePosition(position));
  errors.push(validateOffice(office));
  errors.push(validateAge(age));
  errors.push(validateSalary(salary));

  return errors;
};
