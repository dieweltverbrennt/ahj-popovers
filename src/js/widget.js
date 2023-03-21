export default class Widget {
  constructor() {
    this.body = document.querySelector('body');
    this.button = null;
    this.pupover = null;
  }

  init() {
    this.drawButton();
    this.drawPopover();
    this.button.addEventListener('click', this.onClick.bind(this));
  }

  drawButton() {
    this.button = document.createElement('button');
    this.button.textContent = 'Click to toggle popover';
    this.body.appendChild(this.button);
  }

  drawPopover() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');

    this.popover.innerHTML = '<div class="popover-content"><h3 class="popover-title">Popover title</h3><p class="popover-text">And here`s some amazing content.It`s very engaging.Right?</p></div>';

    this.button.offsetParent.appendChild(this.popover);

    this.popover.style.top = `${this.button.offsetTop - this.popover.offsetHeight - 10}px`;
    this.popover.style.left = `${this.button.offsetLeft + ((this.button.offsetWidth - this.popover.offsetWidth) / 2)}px`;

    this.popover.classList.add('hidden');
  }

  togglePopover() {
    this.popover.classList.toggle('hidden');
  }

  onClick(e) {
    e.preventDefault();
    this.togglePopover();
  }
}
