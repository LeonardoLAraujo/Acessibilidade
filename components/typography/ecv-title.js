import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { ECVTypography } from './ecv-typography.js';

/**
 * @class
 */
export class ECVTitle extends ECVTypography{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return {
            nivelDeTitulo: {type: String},
        }
    }   

    /**
     * @constructor
     */
    constructor(){
        super();
        this. myStyle = '';
    }

    /**
     * @method
     * @static
     * @override
     */
    static get styles(){
        return [ 
            ECVTypography.styles,
            css`
                body{
                    background-color: red;
                }

                .symptoms[aria-label] {
                    position: relative;
                }

                .symptoms[aria-label]::after {
                    content: attr(aria-label);
                    display: none;
                    position: absolute;
                    top: 110%;
                    left: 0px;
                    z-index: 5000;
                    pointer-events: none;
                    padding: 8px 10px;
                    text-decoration: none;
                    font-size: .9em;
                    color: #fff;
                    background-color: #412917;
                }

                .symptoms[aria-label]:hover::after {
                    display: block;
                }
            `,
        ];
    }

    /**
     * @method
     */
    render(){
        this.myStyle = `color: ${this.color}; font-size: ${this.fontSize}; font-weight:${this.fontWeight}; text-align:${this.textAlign}; font-family: ${this.fontFamily}; margin: ${this.marginAll}; margin-left: ${this.marginLeft}; display: ${this.display}; text-decoration: ${this.textDecoration}; border-top: ${this.borderTop}; padding-top: ${this.paddingTop};`;

        return html`
            ${this.gerarNivelDeTitulo(this.nivelDeTitulo)}
        `;
    }

    /**
     * @method
     */
    gerarNivelDeTitulo(nivelDeTitulo){
        if(nivelDeTitulo === '1'){
            return html`<h1 style=${this.myStyle} aria-label=${this.text} class=${this.class}>${this.text}</h1>`;
        }else if(nivelDeTitulo === '2'){
            return html`<h2 style=${this.myStyle} aria-label=${this.text} class=${this.class}>${this.text}</h2>`;
        }else if(nivelDeTitulo === '3'){
            return html`<h3 style=${this.myStyle} aria-label=${this.text} class=${this.class}>${this.text}</h3>`;
        }else if(nivelDeTitulo === '4'){
            return html`<h4 style=${this.myStyle} aria-label=${this.text} class=${this.class}>${this.text}</h4>`;
        }else if(nivelDeTitulo === '5'){
            return html`<h5 style=${this.myStyle} aria-label=${this.text} class=${this.class}>${this.text}</h5>`;
        }else if(nivelDeTitulo === '6'){
            return html`<h6 style=${this.myStyle} aria-label=${this.text} class=${this.class}>${this.text}</h6>`;
        }
    }
}

customElements.define('ecv-title', ECVTitle);