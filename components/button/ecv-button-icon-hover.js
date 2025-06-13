import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { ECVButtonIconText } from './ecv-button-icon-text.js';
import '../icons/ecv-icon.js';
import '../typography/ecv-paragraph.js';

const colorIcon = "#2d77b4";
const colorText = "black"

/**
 * @class
 */
export class ECVButtonIconTextHover extends ECVButtonIconText{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            textDivHover: {type: String},
            backgroundDivColorHover: {type: String},
            colorParagraphHover: {type: String},
            textAlignHover: {type: String},
            divBorderRadiusHover: {type: String},
            widthDivHover: {type: String},
            heightDivHover: {type: String},
            divHoverMarginTop: {type: String},
            divHoverMarginLeft: {type: String},
            paddingDivHover: {type: String},
            fontSizeDivHover: {type: String},
            marginTopParagraph: {type: String},
        }
    };

    /**
     * @constructor
     */
    constructor(){
        super();
    };  

    /**
     * @method
     * @static
     * @override
     */
    static get styles(){
        return css`
            button{
                padding: 9px 10px;
                text-align: center;
                font-size: 16px;
                border: 2px solid #c9c9c9;
                border-radius: 10px;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }

            .myDivText{
                left: 0px;
                position: relative;
                width: 100%;
                text-align: center;
                border-radius: 11px;
                height: 84px;
                cursor: pointer;
                margin-top: -5.2rem;
                display: none;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
            }

            .btnHover{
                border-radius: 20px;
            }

        `; 
    };

    /**
     * @method
     * @override
     */
    firstUpdated(){
        this.myButton = this.shadowRoot?.querySelector('button');
        this.myButtonHover = this.shadowRoot?.querySelector('.myDivText');
    }
    
    /**
     * @method
     */
    render(){
        const myStyles = `padding-left: ${this.paddingLeft}; font-family: ${this.fontFamily};
        padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        padding: ${this.paddingAll}; margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom};
        margin-left: ${this.marginLeft}; margin-right: ${this.marginRight}; border-radius: ${this.borderRadius};
        box-shadow: ${this.boxShadow}; gap: ${this.gap}; background: ${this.background}; color: ${this.color}; width: ${this.width}; height: ${this.height}; border: ${this.border};
        border-radius: ${this.borderRadius}; border-bottom: ${this.borderBottom}; border-width: ${this.borderWidth}; background-color: ${this.backgroundColor}; display: ${this.display}; flex-direction: ${this.flexDirection}; justify-content: ${this.justifyContent}; gap: ${this.gap};
        align-items: ${this.alignItems}; font-size: ${this.fontSize}; cursor: ${this.cursor}; justify-content: ${this.justifyContent} `;

        const styleDivHover = `padding: ${this.paddingDivHover} ;background-color: ${this.backgroundDivColorHover}; text-align: ${this.textAlignHover}; border-radius: ${this.divBorderRadiusHover}; width: ${this.widthDivHover}; margin-top: ${this.divHoverMarginTop}; margin-left: ${this.divHoverMarginLeft}; height: ${this.heightDivHover}`;

        return html`

            <div class="btnHover" @mouseover=${this.mouseOver} @mouseleave=${this.mouseLeave} style=${myStyles}>
                <button @click=${this.function} style=${myStyles} name=${this.name} paddingAll=${this.buttonPadding}>
                    <ecv-icon name=${this.nameIcon} fontSize=${this.iconSize} color=${this.colorIcon} paddingAll="0px 2px" ></ecv-icon>
                    <ecv-paragraph text=${this.text} fontFamily=${this.fontFamily} color=${this.colorParagraph} colorHover=${this.colorHover} marginTop=${this.marginTopParagraph}></ecv-paragraph>
                </button>

                <div class="myDivText" style=${styleDivHover} @click=${this.function}>
                    <ecv-paragraph text=${this.textDivHover} fontFamily=${this.fontFamily} color=${this.colorParagraphHover} fontSize=${this.fontSizeDivHover}></ecv-paragraph>
                </div>
            </div>
            
            

        `;
    };

    /**
     * @method
     */
    mouseOver(){
        this.myButton.style.backgroundColor = this.backgroundHover;

        this.myButtonHover.style.display = "flex";

        if(this.myCursorWhite === true){
            this.changingMyWhiteCursor();
        }else if(this.myCursorBlack === true){
            this.changingMyBlackCursor();
        }else{
            this.resetCursorPointer();
        }
        
        this.requestUpdate();
    }

    /**
     * @method
     */
    mouseLeave(){
        this.myButtonHover.style.display = "none";
        this.myButton.style.backgroundColor = this.backgroundColor;
        this.myButton.style.color = this.color;

       
    }

    /**
     * @method
     */
    changingMyWhiteCursor(){
        if(getComputedStyle(this.myButton).cursor === 'pointer'){
            this.myButton.style.cursor = `url(${this.buttonPaddingcursorPointerWhite}), auto`; 
        }

        this.requestUpdate();
    }

    /**
     * @method
     */
    changingMyBlackCursor(){
        if(getComputedStyle(this.myButton).cursor !== 'pointer'){
            this.myButton.style.cursor = `url(${this.buttonPaddingcursorPointerBlack}), auto`; 
        }

        this.requestUpdate();
    }

    /**
     * @method
     */
    resetCursorPointer(){
        this.myButton.style.cursor = '';
    }
}
 customElements.define('ecv-button-icon-text-hover', ECVButtonIconTextHover);