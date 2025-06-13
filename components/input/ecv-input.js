import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

/**
 * @class
 */
export class ECVInput extends LitElement {

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            name: {type: String},
            color: {type: String},
            background: {type: String},
            width: {type: String},
            height: {type: String},
            marginAll: {type: String},
            marginTop: {type: String},
            marginBotton: {type: String},
            marginLeft: {type: String},
            marginRight: {type: String},
            paddingLeft: {type: String},
            paddingRight: {type: String},
            paddingTop: {type: String},
            paddingAll: {type: String},
            paddingBottom: {type: String},
            text: {type: String},
        } 
    }

    /**
     * @constructor
     */
    constructor(){
        super()
    }

    /**
     * @method
     * @static
     * @override
     */
    static get styles(){
        return css`
        
        `;
    }

    /**
     * @method
     */
    render(){
        return html``;
    }
}
customElements.define('ecv-input', ECVInput);