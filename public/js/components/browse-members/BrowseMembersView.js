import {
  removeChildren,
  appendChildren,
  createButton,
  createDiv,
  createH3,
  createImg,
  createP,
} from '../../dom-utils.js';

class BrowseMembersView {
  constructor() {
    this.rootEl = document.querySelector('#container');
  }

  clearDom() {
    removeChildren(this.rootEl);
  }

  render(props) {
    const {
      currentMemberIndex,
      handleBrowseNextMember,
      membersList,
    } = props;

    const {
      name,
      thumbnailUrl,
      quote,
    } = membersList[currentMemberIndex];

    this.clearDom();
    
    const rootEl = document.getElementById('container');
    const profile = createDiv();
    const imageBox = createDiv();
    const image = createImg();
    const nameField = createH3();
    const memberName = createP();
    const quoteField = createH3();
    const memberQuote = createP();
    const next = createButton();

    profile.classList.add('member-profile');
    imageBox.classList.add('member-image-box');
    memberName.classList.add('member-name');
    memberQuote.classList.add('member-text');
    next.classList.add('btn-next-member');

    image.src = thumbnailUrl;
    nameField.innerHTML = '名前';
    memberName.innerHTML = name;
    quoteField.innerHTML = '一言';
    memberQuote.innerHTML = quote;
    next.innerHTML = '次へ';
    imageBox.appendChild(image);
    appendChildren(profile, imageBox, nameField, memberName, quoteField, memberQuote);
    appendChildren(rootEl, profile, next);
    next.addEventListener('click', () => {
      handleBrowseNextMember();
    });
  }
}

export default BrowseMembersView;
