import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '../icons/ecv-icon.js';
import '../typography/ecv-paragraph.js';
import '../button/ecv-button.js';

const backgroundButton = "#2d77b4";
const colorIconsAndTypography = "white";

const backgroundHover = "lightgray";
const colorIconsAndTypographyHover = "";

/**
 * @class
 */
export class ECVModalHeaderBody extends LitElement{

    /**
     * @method
     * @static
     * @override
     */
    static get properties(){
        return{
            nameIcon: {type: String},
            text: {type: String},
            display: {type: String},
            alignSelf: {type: String},
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
            color: {type: String},
            height: {type: String},
            width: {type: String},
            border: {type: String},
            textAlign: {type: String},
            fontFamily: {type: String},
            fontSize: {type: String},
            fontWeight: {type: String},
        }
    }

    /**
     * @constructor
     */
    constructor(){
        super();
        this.bodyParameters = document.querySelector('body');
        this.myBody = document.querySelectorAll("* body *");
        this.myBodyLinks = document.querySelectorAll("* body a");
        this.myBodyImage = document.querySelectorAll("* body img");
        this.stateLinks = false;
        this.stateImage = false;
        this.ternaryButtonBackgroundLink = '';
        this.ternaryColorIconLink = '';
        this.ternaryColorTypographyLink = '';
        this.ternaryButtonBackgroundImage = '';
        this.ternaryColorIconImage = '';
        this.ternaryColorTypographyImage = '';
    }   

    /**
     * @method
     * @static
     * @override
     */
    static get styles(){
        return css `

            div{
                width: 100%;
                height: 100%;
                display: flex;
            }

            header{
                position: fixed;
                z-index: 2;
                width: 100%;
                background-color: grey;
                padding: 1rem;
            }
        `;
    }

    /**
     * @method
     */
    firstUpdated(){
        this.contentHeader = this.shadowRoot?.querySelector("header");
        this.EcvButton = this.shadowRoot?.querySelectorAll("ecv-button-icon-text");
    }

    /**
     * @method
     */
    render(){      

        this.styleOfMyClickedButtons();

        return html `
            <div>
                <header>
                    <ecv-button-icon-text text="Esconder Links" colorHover=${colorIconsAndTypographyHover} backgroundHover=${backgroundHover} colorIcon=${this.ternaryColorIconLink} color=${this.ternaryColorTypographyLink} backgroundColor=${this.ternaryButtonBackgroundLink} nameIcon="link" width="100px" height="100px" fontFamily="robotoRegular" colorIcon="#2d77b4" background="white" .function=${() => {this.stateHiddenLinks();this.hiddenLinks()}}></ecv-button-icon-text>
                    <ecv-button-icon-text text="Imprimir Página" colorHover=${colorIconsAndTypographyHover} backgroundHover=${backgroundHover} backgroundColor="#fff" nameIcon="print" width="100px" height="100px" fontFamily="robotoRegular" colorIcon="#2d77b4" background="white" .function=${() => {this.printPage()}}></ecv-button-icon-text>
                    <ecv-button-icon-text text="Esconder Imagens" colorHover=${colorIconsAndTypographyHover} backgroundHover=${backgroundHover} colorIcon=${this.ternaryColorIconImage} color=${this.ternaryColorTypographyImage} backgroundColor=${this.ternaryButtonBackgroundImage} nameIcon="image" width="100px" height="100px" fontFamily="robotoRegular" colorIcon="#2d77b4" background="white" .function=${() => {this.stateHiddenImage();this.hiddenImage()}}></ecv-button-icon-text>
                </header>

                <object></object>
            </div>
           
        `;
    }
    
    /**
     * @method
     */
    styleOfMyClickedButtons(){

        //Link
        this.ternaryButtonBackgroundLink = this.stateLinks === true ? backgroundButton :  "white";
        this.ternaryColorIconLink = this.stateLinks === true ? colorIconsAndTypography :  "#2d77b4";
        this.ternaryColorTypographyLink = this.stateLinks === true ? colorIconsAndTypography :  "black";

        //image
        this.ternaryButtonBackgroundImage = this.stateImage === true ? backgroundButton :  "white";
        this.ternaryColorIconImage = this.stateImage === true ? colorIconsAndTypography :  "#2d77b4";
        this.ternaryColorTypographyImage = this.stateImage === true ? colorIconsAndTypography :  "black";
    }

    /**
     * @method
     */
    stateHiddenLinks(){
        this.stateLinks = !this.stateLinks;

        this.requestUpdate();
    }

    /**
     * @method
     */
    stateHiddenImage(){
        this.stateImage = !this.stateImage;

        this.requestUpdate();
    }

    /**
     * @method
     */
    hiddenLinks(){
        if(this.stateLinks === true){
            this.myBodyLinks.forEach((link) => {
                link.style.display = "none";
            });
        }else{
            this.showLinks();
        }
    }

    /**
     * @method
     */
    showLinks(){
        this.myBodyLinks.forEach((link) => {
            link.style.display = "block";
        });
    }

    /**
     * @method
     */
    printPage(){
        window.print();
    }

    /**
     * @method
     */
    hiddenImage(){
        if(this.stateImage === true){
            this.myBodyImage.forEach((image) => {
                image.style.display = "none";
            });
        }else{
            this.showImage();
        }
    }

    /**
     * @method
     */
    showImage(){
        this.myBodyImage.forEach((image) => {
            image.style.display = "inline";
        });
    }
}

customElements.define('ecv-modal-header-body', ECVModalHeaderBody);