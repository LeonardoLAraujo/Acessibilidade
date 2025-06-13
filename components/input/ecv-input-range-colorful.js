import {html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import {ECVInputRange} from './ecv-input-range.js';

/**
 * @class
 */
export class ECVInputRangeColorful extends ECVInputRange {
    
    /**
     * @method
     * @override
     * @static
     */
    static get properties(){
        return{
            backgroundColor: {type: String},
            backgroundAllBody: {type: Boolean},
            headerAllBody: {type: Boolean},
            contentAllBody: {type: Boolean},
        };
    }
    
    /**
     * @constructor
     */
    constructor(){
        super();
        this.myAllHtml = document.querySelector("*");
        this.myAllBodyHeader = document.querySelectorAll("* body header, h1, h2, h3, h4, h5, h6");
        this.myAllBodyContent = document.querySelectorAll("* body p, a, ul, li, span");
        this.myInputValueNumber = 0;
        
    }

     /**
     * @method
     * @override
     * @static
     */
    static get styles(){
        return css`
            .input__slider {
                -webkit-appearance: none;
                display: block;
                margin: 5px auto; 
                width: 100%;
                height: 15px;
                border-radius: 10px;
                background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 87%, black 0%, white 100%);
                outline: none;           
                -webkit-transition: .2s;
                transition: opacity .2s;
            }

            .input__slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 25px;
                height: 25px;
                border-radius: 50%; 
                border: 2px solid #6e6e6e;
                background: #fff;
                cursor: pointer;
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

    /**
     * @method
     * @override
     */
    render(){
        const myStyle = `background-color: ${this.backgroundColor}; width: ${this.width}; height:${this.height};`;

        return html`
            <input style=${myStyle} class="input__slider" type="range" placeholder=${this.text} max="400" min=${this.min} value="0" step="5" @input=${this.myValue}>
        `;
    }

     /**
     * @method
     */
     myValue(){
        if(this.backgroundAllBody === true){
            this.backgroundBody();
        }else if(this.headerAllBody === true){
            this.headerBody();
        }else if(this.contentAllBody === true){
            this.contentBody();
        }

        this.myInputValueNumber = parseInt(this.myInput.value);

        this.requestUpdate();
    }

    /**
     * @method
     */
    backgroundBody(){
        setTimeout(() => {
            this.myAllHtml.style.backgroundColor = `hsl(${this.myInput.value} 100% 50%)`;
            this.myCoreConditionBackground();
        },100);      
    }

    /**
     * @method
     */
    headerBody(){

        setTimeout(() => {
            this.myAllBodyHeader.forEach((item) => {
                item.style.color = `hsl(${this.myInput.value}  100% 50%)`;
    
                if(this.myInputValueNumber >= 365){
                    item.style.color = `black`;
                }
        
                if(this.myInputValueNumber >= 380){
                    item.style.color = `#BEBEBE`; 
                }
        
                if(this.myInputValueNumber >= 385){
                    item.style.color = `#D3D3D3`;
                }
        
                if(this.myInputValueNumber >= 390){
                    item.style.color = `#FFFFFF`;
                }
            });
        }, 100);   
    }

    /**
     * @method
     */
    contentBody(){
        setTimeout(() => {
            this.myAllBodyContent.forEach((content) => {
                content.style.color = `hsl(${this.myInput.value} 100% 50%)`;
    
                if(this.myInputValueNumber >= 365){
                    content.style.color = `black`;
                }
        
                if(this.myInputValueNumber >= 380){
                    content.style.color = `#BEBEBE`; 
                }
        
                if(this.myInputValueNumber >= 385){
                    content.style.color = `#D3D3D3`;
                }
        
                if(this.myInputValueNumber >= 390){
                    content.style.color = `#FFFFFF`;
                }
            });
        }, 100);
    }

    /**
     * @method
     */
    
    myCoreConditionBackground(){
        if(this.myInputValueNumber >= 365){
            this.myAllHtml.style.backgroundColor = `black`;
        }

        if(this.myInputValueNumber >= 380){
            this.myAllHtml.style.backgroundColor = `#BEBEBE`; 
        }

        if(this.myInputValueNumber >= 385){
            this.myAllHtml.style.backgroundColor = `#D3D3D3`;
        }

        if(this.myInputValueNumber >= 390){
            this.myAllHtml.style.backgroundColor = `#FFFFFF`;
        }
    }

    /***
     * @method
     */
    resetInputRange(){
        this.myInput.value = 0;
    }

}

customElements.define('ecv-input-range-colorful', ECVInputRangeColorful);