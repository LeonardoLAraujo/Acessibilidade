import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { ECVTypography } from './ecv-typography.js';

/**
 * @class
 */
export class ECVParagraph extends ECVTypography{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return {
          
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
        return [ 
            ECVTypography.styles,
            css`
                p{
                    margin: 0px;
                }

                .symptoms[aria-label] {
                    position: relative;
                }

                .symptoms[aria-label]::after {
                    content: attr(aria-label);
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0px;
                    z-index: 5000;
                    pointer-events: none;
                    padding: 8px 10px;
                    text-decoration: none;
                    font-size: 10rem;
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
    firstUpdated(){
        this.myP = this.shadowRoot?.querySelector("p");
    }

    /**
     * @method
     */
    render(){
        const myStyle = `color: ${this.color}; font-size: ${this.fontSize}; font-weight:${this.fontWeight}; text-align:${this.textAlign}; font-family: ${this.fontFamily}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; width: ${this.width}; display: ${this.display}; padding-left: ${this.paddingLeft};
        padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        padding: ${this.paddingAll}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom};
        margin-left: ${this.marginLeft}; margin-right: ${this.marginRight}; background-color: ${this.backgroundColor};`;

        return html`
            <p style=${myStyle} aria-label=${this.text} class=${this.class}  @mouseover=${this.mouseOver} @mouseleave=${this.mouseLeave}>${this.text}</p>
        `;
    }

    /**
     * @method
     */
    mouseOver(){    
        this.myP.style.color = this.colorHover;
    }

    /**
     * @method
     */
    mouseLeave(){
        this.myP.style.color = this.color;
    }

}

customElements.define('ecv-paragraph', ECVParagraph);