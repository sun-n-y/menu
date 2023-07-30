import get from './getElement.js';
import showMenu from './showMenu.js';

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

  const btns = document.querySelectorAll('.btn');

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const filterValue = e.target.dataset.id;
      const filteredArray = array.filter((item) => {
        if (item.category === filterValue) {
          return item;
        }
      });
      if (filterValue === 'all') {
        showMenu(array);
      } else {
        showMenu(filteredArray);
      }
    });
  });
};

export default showBtns;
