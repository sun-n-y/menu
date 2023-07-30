import get from './getElement.js';

const btnContainer = get('.btn-container');

const showBtns = (array) => {
  const filterBtns = array.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    },
    ['all']
  );
  btnContainer.innerHTML = filterBtns
    .map((item) => {
      return `<button class="btn" type="button" data-id="${item}">${item}</button>`;
    })
    .join('');
};

export default showBtns;
