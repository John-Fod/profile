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
  
      // Setup a click listener on <app-drawer> itself.
      this.addEventListener('click', e => {
        // Don't toggle the drawer if it's disabled.
        if (this.disabled) {
          return;
        }
        this.toggleDrawer();
      });
    }

    connectedCallback(){
      console.log("we are connected");
    }

    disconnectedCallback(){
      console.log("all done");
    }
}

customElements.define('full-header', FullHeader);
// customElements.define('popup-info', PopUpInfo);