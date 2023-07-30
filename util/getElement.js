const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error('error in element selector');
  }
};

export default get;
