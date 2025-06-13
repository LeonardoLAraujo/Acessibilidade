import {html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { ECVInput } from './ecv-input.js';

/**
 * @class
 */
export class ECVInputRange extends ECVInput{

    /***
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            min: {type: String},
            max: {type: String},
            value: {type: String},
            step: {type: String},
        }
    }

    /**
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
        input{
            display: block;
            margin: 5px auto;
        }
        `;
    }

    /***
     * @method
     * @override
     */
    firstUpdated(){
        this.myInput = this.shadowRoot?.querySelector("input");
    }

    /***
     * @method
     * @override
     */
    render(){

        const myStyle = `width: ${this.width}; height:${this.height}`;

        return html`
            <input style=${myStyle} type="range" placeholder=${this.text} max=${this.max} min=${this.min} value=${this.value} step=${this.step} @change=${this.myValue}>
        `;
    }   

} 

customElements.define('ecv-input-range', ECVInputRange);