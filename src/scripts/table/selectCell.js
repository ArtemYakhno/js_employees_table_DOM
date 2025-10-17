import {
  validateFullName,
  validatePosition,
  validateOffice,
  validateAge,
  validateSalary,
} from '../validators/validators';

import { convertToNumber } from '../utils/utils';

export function selectCellFactory(state) {
  return function selectCell(cell, type, colName) {
    const prev = cell.textContent?.trim() ?? '';
    const input = document.createElement('input');

    input.type = type;
    input.className = 'cell-input';
    input.name = colName;
    input.value = prev;

    if (colName === 'salary') {
      input.value = convertToNumber(prev);
    }
    state.activeInput = input;

    cell.textContent = '';
    cell.appendChild(input);

    input.focus();

    const save = () => {
      const newValue = input.value.trim();

      cell.textContent = newValue === '' ? prev : newValue;
      state.activeInput = null;
    };
    const cancel = () => {
      cell.textContent = prev;
    };

    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        save();
      }

      if (ev.key === 'Escape') {
        cancel();
      }
    });
    input.addEventListener('blur', save);
  };
}
