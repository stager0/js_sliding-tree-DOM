'use strict';

const tree = document.querySelector('.tree');
const allTreeChild = [];
const allSiblings = [];

for (const child of tree.children) {
  allTreeChild.push(child);

  for (const sibling of child.querySelector('ul').children) {
    allSiblings.push(sibling);
  }
}

function hideLi(liToHide) {
  const newSpan = document.createElement('span');

  let textContent = '123';
  const textNode = Array.from(liToHide.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0,
  );

  if (!textNode) {
    return;
  }

  textContent = liToHide.firstChild.textContent;
  liToHide.firstChild.remove();

  newSpan.textContent = textContent;

  liToHide.prepend(newSpan);

  newSpan.addEventListener('click', (e) => {
    e.preventDefault();

    const li = e.target.closest('li');
    const childUl = li.querySelector('ul');

    childUl.classList.toggle('isHide');

    if (childUl.classList.contains('isHide')) {
      childUl.style.display = 'none';
    } else {
      childUl.style.display = '';
    }
  });
}

allSiblings.forEach((sib) => {
  hideLi(sib);
});

allTreeChild.forEach((child) => hideLi(child));
