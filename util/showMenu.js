import get from './getElement.js';

const menuContainer = get('.menu-container');

const showMenu = (array) => {
  const menuArray = array
    .map((item) => {
      return `<div class="single-item">
            <div class="image-container">
                <img src="${item.image}"
                    class="item-img" alt="${item.name}">
            </div>
            <div class="item-info">
                <div class="item-title">
                    <h2 class="name">${item.name}</h2>
                    <span class="price">${item.price}</span>
                </div>
                <p class="description">${item.description}</p>
            </div>
        </div>`;
    })
    .join('');
  menuContainer.innerHTML = menuArray;
};

export default showMenu;
