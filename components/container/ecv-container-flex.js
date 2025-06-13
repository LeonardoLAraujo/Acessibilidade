import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { ECVContainer } from './ecv-container.js';

/**
 * @class
 */
export class ECVContainerFlex extends ECVContainer{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            flexDirection: {type: String},
            flexWrap: {type: String},
            rowGap: {type: String},
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
            div{
                display: flex;
            }
        `;
    }

    /**
     * @method
     */
    render(){
        const flexStyle = `display: flex; flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.justifyContent};
        align-items: ${this.alignItems}; align-self: ${this.alignSelf}; padding-left: ${this.paddingLeft};
        padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        padding: ${this.paddingAll}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom};
        margin-left: ${this.marginLeft}; margin-right: ${this.marginRight}; border-radius: ${this.borderRadius};
        box-shadow: ${this.boxShadow}; gap: ${this.gap}; background: ${this.background}; color: ${this.color}; width: ${this.width}; height: ${this.height}; border: ${this.border};
        border-radius: ${this.borderRadius}; border-bottom: ${this.borderBottom}; border-width: ${this.borderWidth}; row-gap: ${this.rowGap}; position: ${this.position}; background-image: linear-gradient(${this.backgroundGradient});
        `
        return html`
        <slot style=${flexStyle}></slot>
            `;
    }
}

customElements.define('ecv-container-flex', ECVContainerFlex);