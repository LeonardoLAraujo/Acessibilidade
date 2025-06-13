import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

/**
 * @class
 */
export class ECVContainer extends LitElement{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            justifyContent: {type: String},
            alignItems: {type: String},
            alignSelf: {type: String},
            paddingLeft: {type: String},
            paddingRight: {type: String},
            paddingTop: {type: String},
            paddingAll: {type: String},
            paddingBottom: {type: String},
            marginTop: {type: String},
            marginBottom: {type: String},
            marginLeft: {type: String},
            marginRight: {type: String},
            marginAll: {type: String},
            borderRadius: {type: String},
            boxShadow: {type: String},
            gap: {type: String},
            background: {type: String},
            color: {type: String},
            height: {type: String},
            width: {type: String},
            border: {type: String},
            textAlign: {type: String},
            borderBottom: {type: String},
            borderTop: {type: String},
            borderRight: {type: String},
            borderLeft: {type: String},
            borderWidth: {type: String},
            fontFamily: {type: String},
            position: {type: String},
            backgroundGradient: {type: String},
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
        
        `;
    }

    /**
     * @method
     */
    render(){
        return html``;
    }
    
}

customElements.define('ecv-container', ECVContainer);