import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

/**
 * @class
 */
export class ECVButton extends LitElement{

    /**
     * @method
     * @static
     * @override
     */
    static get properties (){
        return {
            text: {type: String},
            name: {type: String},
            display: {type: String},
            paddingLeft: {type: String},
            paddingRight: {type: String},
            paddingTop: {type: String},
            paddingAll: {type: String},
            paddingBottom: {type: String},
            marginTop: {type: String},
            marginBottom: {type: String},
            marginLeft: {type: String},
            marginRight: {type: String},
            marginAll: {type: String},
            borderRadius: {type: String},
            boxShadow: {type: String},
            background: {type: String},
            backgroundColor: {type: String},
            color: {type: String},
            height: {type: String},
            width: {type: String},
            border: {type: String},
            textAlign: {type: String},
            borderBottom: {type: String},
            borderTop: {type: String},
            borderRight: {type: String},
            borderLeft: {type: String},
            borderWidth: {type: String},
            fontFamily: {type: String},
            fontSize: {type: String},
            position: {type: String},
            backgroundHover: {type: String},
            colorHover: {type: String},
            cursor: {type: String},
            myCursorWhite: {type: Boolean},
            myCursorBlack: {type: Boolean},
            colorParagraph: {type: String},
            justifyContent: {type: String},
            function: {},
        }
    }   

    /**
     * @constructor
     */
    constructor(){
        super();
        this.colorIcon = "#2d77b4";
        this.iconSize = "40px";
        this.buttonPadding = "8px 0px";
        this.cursor = "pointer"
        this.buttonPaddingcursorPointerWhite = 'https://access.equalweb.com/assets/images/cursors/bighandwhite.cur';
        this.buttonPaddingcursorPointerBlack = 'https://access.equalweb.com/assets/images/cursors/bighandblack.cur';
    }

    /**
     * @method
     * @static
     * @override
     */
    static get styles(){
        return css`
            button{
                padding: 8px;
                width: 100%;
                text-align: center;
                font-size: 16px;
                border: 2px solid #c9c9c9;
                border-radius: 8px;
                background-color: white;
                cursor: pointer;
            }

        `;
        
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
        const style = `background-color: ${this.backgroundColor}; 
        padding: ${this.paddingAll}; font-family: ${this.fontFamily}; padding-left: ${this.paddingLeft};
        padding-right: ${this.paddingRight}; padding-top: ${this.paddingTop}; padding-bottom: ${this.paddingBottom};
        margin: ${this.marginAll}; margin-top: ${this.marginTop}; margin-bottom: ${this.marginBottom};
        margin-left: ${this.marginLeft}; margin-right: ${this.marginRight};
        box-shadow: ${this.boxShadow}; background: ${this.background}; color: ${this.color}; width: ${this.width}; height: ${this.height}; border: ${this.border};
        border-radius: ${this.borderRadius}; border-bottom: ${this.borderBottom}; border-width: ${this.borderWidth}; position: ${this.position}; font-size: ${this.fontSize}; cursor: ${this.cursor};`

        return html`
            <button @click=${this.function} style=${style} name=${this.name} @mouseover=${this.mouseOver} @mouseleave=${this.mouseLeave}>${this.text}</button>    
        `;
    } 

    /**
     * @method
     */
    mouseOver(){
        this.myButton.style.backgroundColor = this.backgroundHover;
        this.myButton.style.color = this.colorHover;
        
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

customElements.define('ecv-button', ECVButton);