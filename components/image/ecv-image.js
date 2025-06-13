import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

/***
 * @class
 */
export class ECVImage extends LitElement{

    /***
     * @static
     * @override
     * @method
     */
    static get properties(){
        return{
            source: {type: String},
            width: {type: String},
            height: {type: String},
            borderRadius: {type: String},
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
        }
    }

    /***
     * @constructor
     */
    constructor(){
        super();
    }

    /***
     * @static
     * @override
     * @method
     */
    static get styles(){
        return css`

        `;
    }

    /***
     * @method
     * @protected
     */
    firstUpdated(){
        this.myImage = this.shadowRoot?.querySelector("img");
    }

    /***
     * @return
     * @override
     * @method
     */
    render(){
        const style = `width: ${this.width}; height: ${this.height}; border-radius: ${this.borderRadius}; padding-left: ${this.paddingLeft};
        padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        padding: ${this.paddingAll}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom};
        margin-left: ${this.marginLeft}; margin-right: ${this.marginRight};`;

        return html`
            <img src=${this.source} style=${style}>
        `;
    }

}

customElements.define('ecv-image', ECVImage);