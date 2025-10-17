import { validateFullName } from '../validators/validateFullName';
import { validatePosition } from '../validators/validatePosition';
import { validateOffice } from '../validators/validateOffice';
import { validateAge } from '../validators/validateAge';
import { validateSalary } from '../validators/validateSalary';

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
