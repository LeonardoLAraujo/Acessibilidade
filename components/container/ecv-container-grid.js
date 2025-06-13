import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { ECVContainer } from './ecv-container.js';

/**
 * @class
 */
export class ECVContainerGrid extends ECVContainer{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            gridTemplateRow: {type: String},
            gridTemplateColumn: {type: String},
            gridTemplateArea: {type: String},
            gridArea: {type: String},
            gridRowGap: {type: String},
            gridColumnsGap: {type: String}
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
                display: grid;
            }
        `;
    }

    /**
     * @method
     */
    render(){
        const gridStyle = `display: grid; grid-template-area: ${this.gridTemplateArea}; grid-template-row: ${this.gridTemplateRow}; grid-template-columns: ${this.gridTemplateColumn}; grid-row-gap: ${this.gridRowGap}; grid-column-gap: ${this.gridColumnsGap}; grid-area: ${this.gridArea}; justify-content: ${this.justifyContent};
        align-items: ${this.alignItems}; align-self: ${this.alignSelf}; padding-left: ${this.paddingLeft};
        padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        padding: ${this.paddingAll}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom};
        margin-left: ${this.marginLeft}; margin-right: ${this.marginRight}; border-radius: ${this.borderRadius};
        box-shadow: ${this.boxShadow}; gap: ${this.gap}; background: ${this.background}; color: ${this.color}; width: ${this.width}; height: ${this.height}; border: ${this.border};
        text-align: ${this.textAlign}; font-family: ${this.fontFamily};
        `;

        return html`
            <slot style=${gridStyle}></slot>
            `;
    }
}

customElements.define('ecv-container-grid', ECVContainerGrid);