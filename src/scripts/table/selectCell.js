import { validateFullName } from '../validators/validateFullName';
import { validatePosition } from '../validators/validatePosition';
import { validateOffice } from '../validators/validateOffice';
import { validateAge } from '../validators/validateAge';
import { validateSalary } from '../validators/validateSalary';

export function selectCellFactory(state) {
  return function selectCell(cell) {
    if (cell.querySelector('input.cell-input')) {
      return;
    }

    const prev = cell.textContent?.trim() ?? '';

    cell.textContent = '';

    const input = document.createElement('input');

    input.type = 'text';
    input.className = 'cell-input';
    input.value = prev;
    state.activeInput = input;

    cell.appendChild(input);

    input.focus();

    const commit = () => {
      const newValue = input.value.trim();

      cell.textContent = newValue === '' ? prev : newValue;
      state.activeInput = null;
    };
    const cancel = () => {
      cell.textContent = prev;
    };

    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        commit();
      }

      if (ev.key === 'Escape') {
        cancel();
      }
    });
    input.addEventListener('blur', commit);
  };
}
