import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

/**
 * @class
 */
export class ECVTypography extends LitElement {

    /**
     * @method
     * @static
     * @override
     */
    static get properties (){
        return{
            text: {type: String},
            display: {type: String},
            color: {type: String},
            fontSize: {type: String},
            fontWeight: {type: String},
            textAlign: {type: String},
            fontFamily: {type: String},
            marginAll: {type: String},
            marginTop: {type: String},
            marginBottom: {type: String},
            marginLeft: {type: String},
            marginRight: {type: String},
            paddingAll: {type: String},
            paddingTop: {type: String},
            paddingBottom: {type: String},
            paddingLeft: {type: String},
            paddingRight: {type: String},
            width: {type: String},
            bordeStyle: {type: String},
            class: {type: String},
            backgroundColor: {type: String},
            textDecoration: {type: String},
            borderTop: {type: String},
            colorHover: {type: String},
        }
    }

    /**
     * @constructor
     */
    constructor(){
        super();   
    }

    /**
     * @method
     * @static
     * @override
     */
    static get styles(){
        return css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        `;
    }

    /**
     * @method
     */
    render(){
        return html``;
    }
}

customElements.define('ecv-typography', ECVTypography)