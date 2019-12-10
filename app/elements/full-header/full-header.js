class FullHeader extends HTMLElement {

    // Can define constructor arguments if you wish.
    get number(){
      return[1,2,3,4,5,6,7,8,9,10];
    }

    constructor() {
      // If you define a constructor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
      const shadow = this.attachShadow({mode: 'open'});
      const wrapper = document.createElement('div');
      wrapper.classList.add('full-header-class');
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