export const pushNotification = (
  posTop,
  posRight,
  title,
  description,
  type,
) => {
  const allert = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  allert.style.cssText = `
  position: fixed;
  top: ${posTop}px;
  right: ${posRight}px;
  `;

  allert.className = `notification ${type}`;
  allert.setAttribute('data-qa', 'notification');

  h2.textContent = title;
  h2.className = 'title';

  p.textContent = description;

  allert.append(h2, p);
  document.body.append(allert);

  setTimeout(() => {
    if (allert) {
      allert.style.display = 'none';
    }
  }, 2000);
};
