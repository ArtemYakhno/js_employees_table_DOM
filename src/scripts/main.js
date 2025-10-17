'use strict';

import { initTableInteractions } from './table/initTable.js';
import { initFormInteractions } from './form/initFormInteractions.js';
import { createForm } from './form/createForm.js';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const form = document.querySelector('form');

  if (!table) {
    return;
  }
  initTableInteractions(table);

  if (!form) {
    createForm(table);
  }
  initFormInteractions(document.querySelector('form'), table);
});
