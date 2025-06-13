import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '../icons/ecv-icon.js';
import '../typography/ecv-paragraph.js';

/**
 * @class
 */
export class ECVModalContainer extends LitElement{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            nameIcon: {type: String},
            text: {type: String},
            display: {type: String},
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
            background: {type: String},
            color: {type: String},
            height: {type: String},
            width: {type: String},
            border: {type: String},
            textAlign: {type: String},
            fontFamily: {type: String},
            fontSize: {type: String},
            fontWeight: {type: String},
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
        return css ``;
    }

    /**
     * @method
     */
    render(){
        const myStyle = `display: ${this.display}; padding-left: ${this.paddingLeft}; padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        padding: ${this.paddingAll}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom}; margin-left: ${this.marginLeft}; margin-right: ${this.marginRight}; border-radius: ${this.borderRadius}; box-shadow: ${this.boxShadow}; gap: ${this.gap}; background: ${this.background}; color: ${this.color}; width: ${this.width}; height: ${this.height}; border: ${this.border}; border-radius: ${this.borderRadius}; text-align: ${this.textAlign}; font-family: ${this.fontFamily}; font-size: ${this.fontSize}; font-weight: ${this.fontWeight};`;

    return html `
        <div style=${myStyle}>
            <ecv-icon  name=${this.nameIcon} color="#2d77b4" fontSize="40px"></ecv-icon>
            <ecv-paragraph text=${this.text} color="black" fontFamily="Arial" marginAll="0px"></ecv-paragraph>
        </div>
    `;
}
}

customElements.define('ecv-modal-container', ECVModalContainer);