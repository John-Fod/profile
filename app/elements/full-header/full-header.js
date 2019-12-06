class FullHeader extends HTMLElement {
    // Can define constructor arguments if you wish.
    constructor() {
      // If you define a constructor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
      const shadow = this.attachShadow({mode: 'open'});
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');
      const textSpan = document.createElement('span');
      textSpan.textContent = 'THIS IS FROM JS';
      wrapper.appendChild(textSpan);
      shadow.appendChild(wrapper);
    }

    connectedCallback(){
      console.log('we are connecte');
    }

    disconnectedCallback(){
      console.log('all done');
    }
}

customElements.define('full-header', FullHeader);
// customElements.define('popup-info', PopUpInfo);