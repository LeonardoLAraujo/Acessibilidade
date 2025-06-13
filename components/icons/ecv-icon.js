import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { materialSymbolsCSS } from './materialSymbols.js';

/***
 * @class
 */
export class ECVIcon extends LitElement{

    /***
     * @static
     * @overload
     * @method
     */
    static get properties(){
        return{
            name: {type: String},
            display: {type: String},
            alignItems: {type: String},
            justifyContent: {type: String},
            paddingAll: {type: String},
            marginAll: {type: String},
            marginTop: {type: String},
            width: {type: String},
            height: {type: String},
            background: {type: String},
            color: {type: String},
            borderRadius: {type: String},
            border: {type: String},
            fontSize: {type: String},
            textAlign: {type: String},
            fontWeight: {type: String},
            cursor: {type: String},
            fontFamily: {type: String},
            function: {},

        }
    }

    /***
     * @static
     * @overload
     * @method
     */
    static styles = [
        materialSymbolsCSS, 
        css `
            
    `];
    
    /***
     * @constructor
     */
    constructor(){
        super();
    }

    /***
     * @method
     */
    firstUpdated(){
       this.span = this.shadowRoot?.querySelector('span');
    }

    /**
     * @method
     */
    hidden(){
        this.span.style.display = "none";
    }

    /**
     * @method
     */
    show(){
        this.span.style.display = "flex";
    }

    /***
     * @method
     * @returns
     */
    render(){
        const myStyle = `display: ${this.display}; align-items: ${this.alignItems}; justify-content: ${this.justifyContent}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; width: ${this.width}; height: ${this.height}; background: ${this.background}; color: ${this.color};
        border-radius: ${this.borderRadius}; border: ${this.border}; font-size: ${this.fontSize}; text-align: ${this.textAlign}; font-weight: ${this.fontWeight}; padding: ${this.paddingAll}; cursor: ${this.cursor}`;

        return html`
            <span style=${myStyle} class="meu-icone material-symbols-outlined" @click=${this.function}>${this.name}</span>
        `;
    }

}

customElements.define("ecv-icon", ECVIcon);