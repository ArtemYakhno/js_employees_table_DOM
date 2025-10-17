import { checkFormInputs } from './checkFormInputs';
import { pushNotification } from '../notification/pushNotification';
import { convertToCurrency } from '../utils/utils';

export function initFormInteractions(form, table) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const dataFromForm = {
      fullName: form.elements.name.value,
      position: form.elements.position.value,
      office: form.elements.office.value,
      age: form.elements.age.value,
      salary: form.elements.salary.value,
    };

    const checkResults = checkFormInputs(dataFromForm);

    if (checkResults.length > 0) {
      handleError(checkResults);
    } else {
      clearErrorNotifications();
      addData(dataFromForm, table);
      form.reset();
    }
  });
}

function handleError(errors) {
  for (let i = 0; i < errors.length; i++) {
    pushNotification(
      i * 140 + 10,
      10,
      errors[i].title,
      errors[i].message,
      'error',
    );
  }
}

function addData({ fullName, position, office, age, salary } = {}, table) {
  const tBody = table.tBodies?.[0] ?? table.createTBody();
  const row = `<tr>
          <td>${fullName}</td>
          <td>${position}</td>
          <td>${office}</td>
          <td>${age}</td>
          <td>${convertToCurrency(salary)}</td>
        </tr>`;

  tBody.insertAdjacentHTML('beforeend', row);

  pushNotification(
    10,
    10,
    'Title of Success message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'success',
  );
}

function clearErrorNotifications() {
  const errorNotifications = document.querySelectorAll('.error');

  if (!errorNotifications) {
    return;
  }

  for (const notification of errorNotifications) {
    notification.remove();
  }
}
