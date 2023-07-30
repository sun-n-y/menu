import get from './util/getElement.js';
import showMenu from './util/showMenu.js';

const menu = [
  {
    image:
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'buttermilk pancakes',
    price: '10.99',
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    category: 'breakfast',
  },
  {
    image:
      'https://images.pexels.com/photos/7936743/pexels-photo-7936743.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'avacado toast',
    price: '10.99',
    description:
      'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut',
    category: 'breakfast',
  },
  {
    image:
      'https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'bacon overflow',
    price: '8.99',
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    category: 'breakfast',
  },
  {
    image:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'diner special ',
    price: '14.99',
    description:
      'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
    category: 'lunch',
  },
  {
    image:
      'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'salad bowl',
    price: '9.99',
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    category: 'lunch',
  },
  {
    image:
      'https://images.pexels.com/photos/3864680/pexels-photo-3864680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'american classic',
    price: '12.99',
    description:
      'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    category: 'lunch',
  },
  {
    image:
      'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'oreo dream',
    price: '3.99',
    description:
      'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    category: 'shakes',
  },
  {
    image:
      'https://images.pexels.com/photos/990439/pexels-photo-990439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'strawberry',
    price: '3.99',
    description:
      'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    category: 'shakes',
  },
  {
    image:
      'https://images.pexels.com/photos/1169004/pexels-photo-1169004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'birthday shake',
    price: '3.99',
    description:
      'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    category: 'shakes',
  },
  {
    image:
      'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'steak dinner',
    price: '39.99',
    description:
      'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    category: 'dinner',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  showMenu(menu);
});
