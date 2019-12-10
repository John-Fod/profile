import { LitElement, html } from 'lit-element';

class ProfilePicture extends LitElement {

    render() {
        return html`
            <p>This is my paragraph</p>
        `;
    }
}

customElements.define('profile-picture', ProfilePicture);