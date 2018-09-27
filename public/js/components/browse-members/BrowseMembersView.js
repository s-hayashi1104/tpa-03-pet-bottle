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
    const MemberName = createP();
    const quoteField = createH3();
    const MemberQuote = createP();
    const next = createButton();

    profile.classList.add('member-profile');
    imageBox.classList.add('member-image-box');
    MemberName.classList.add('member-name');
    MemberQuote.classList.add('member-text');
    next.classList.add('btn-next-member');

    image.src = thumbnailUrl;
    nameField.innerHTML = '名前';
    MemberName.innerHTML = name;
    quoteField.innerHTML = '一言';
    MemberQuote.innerHTML = quote;
    next.innerHTML = '次へ';
    imageBox.appendChild(image);
    appendChildren(rootEl, profile, imageBox, nameField, MemberName, quoteField, MemberQuote, next);
    next.addEventListener('click', () => {
      handleBrowseNextMember();
    });
  }
}

export default BrowseMembersView;
