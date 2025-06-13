import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { ECVButton } from './ecv-button.js';
import '../icons/ecv-icon.js';

/**
 * @class
 */
export class ECVButtonIcon extends ECVButton{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            nameIcon: {type: String},
            display: {type: String},
            flexDirection: {type: String},
            justifyContent: {type: String},
            alignItems: {type: String},
            gap: {type: String},
            colorIcon: {type: String},
            iconSize: {type: String},
            buttonPadding: {type: String},
            iconHover: {type: String},
        }
    }

    /**
     * @constructor
     */
    constructor(){
        super();
        this.colorIcon = "#2d77b4";
    }

    /**
     * @method
     * @static
     * @override
     */
    static get styles(){
        return css``;
    }

    /**
     * @method
     */
    firstUpdated(){
        this.myButton = this.shadowRoot?.querySelector('button');
    }

    /**
     * @method
     */
    render(){
        const myStyles =  `padding-left: ${this.paddingLeft};
        padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        padding: ${this.paddingAll}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom};
        margin-left: ${this.marginLeft}; margin-right: ${this.marginRight}; border-radius: ${this.borderRadius};
        box-shadow: ${this.boxShadow}; gap: ${this.gap}; background: ${this.background}; color: ${this.color}; width: ${this.width}; height: ${this.height}; border: ${this.border};
        border-radius: ${this.borderRadius}; border-bottom: ${this.borderBottom}; border-width: ${this.borderWidth}; background-color: ${this.backgroundColor}; display: ${this.display}; flex-direction: ${this.flexDirection}; justify-content: ${this.justifyContent}; gap: ${this.gap};
        align-items: ${this.alignItems}; font-size: ${this.fontSize}; font-family: ${this.fontFamily}; cursor: ${this.cursor};`;

        return html`
        <slot></slot>
        <button style=${myStyles} @mouseover=${this.mouseOver} @mouseleave=${this.mouseLeave} @click=${this.function}>
            <ecv-icon name=${this.nameIcon} color=${this.colorIcon}></ecv-icon>
        </button>
        
        `;
    }

    /**
     * @method
     */
    mouseOver(){
        this.myButton.style.backgroundColor = this.backgroundHover;
        this.colorIcon = this.iconHover;
    }

    /**
     * @method
     */
    mouseLeave(){
        this.myButton.style.backgroundColor = this.backgroundColor;
        this.colorIcon = this.colorIcon;
    }
}
customElements.define('ecv-button-icon', ECVButtonIcon);