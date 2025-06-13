import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '../icons/ecv-icon.js';

/***
 * @class
 */
export class ECVModal extends LitElement{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            width: {type: String},
            height: {type: String},
            background: {type: String},
            color: {type: String},
            borderRadius: {type: String},
            boxShadow: {type: String},
            top: {type: String},
            left: {type: String},
            display: {type: String},
            justifyContent: {type: String},
            alignItems: {type: String},
            flexDirection: {type: String},
            marginTop: {type: String},
            marginBottom: {type: String},
            modalBorderColor: {type: String},
            filter: {type: String},
        }
    }

    /***
     * @constructor
     */
    constructor(){
        super();
    }

    /***
     * @method
     * @static
     * @override
     */
    static get styles(){
        return css`
           /* #fade{
                background: 0% 0% no-repeat padding-box padding-box rgba(114, 111, 111, 0.65);
                opacity: 1;
                backdrop-filter: blur(6px);
                position: relative;
                width: 100vw;
                height: 100vh;
                z-index: 10;
                overflow-y: auto ; 
            }*/

        `;
    }
    
    /***
     * @method
     * @override
     */
    render(){
        const myStyle = `width: ${this.width}; height: ${this.height}; background: ${this.background}; color: ${this.color}; border-radius: ${this.borderRadius}; box-shadow: ${this.boxShadow}
        top: ${this.top}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom}; border: 1px solid ${this.modalBorderColor}; filter: ${this.filter};`;

        const myStyleFade = `display: ${this.display}; justify-content: ${this.justifyContent}; align-items: ${this.alignItems}; flex-direction: ${this.flexDirection}`;
        
        return html`
           <div id="fade" style=${myStyleFade}>
                <div>
                    <slot name="closeModal"></slot>
                </div>
                <div class="modal" style=${myStyle}>
                    <slot name="header"></slot>
                    <slot name="main"></slot>
                    <slot name="footer"></slot>
                </div>
                
          </div>
        `;
    }

    /***
     * @method
     */
    closeModal(){

    }

    /***
     * @method
     */
    openModal(){
        
    }

}

customElements.define('ecv-modal', ECVModal);