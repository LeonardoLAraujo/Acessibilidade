import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

import './components/modal/ecv-modal.js';
import './components/modal/ecv-modal.js';
import './components/icons/ecv-icon.js';
import './components/button/ecv-button.js';
import './components/typography/ecv-typography.js';
import './components/typography/ecv-title.js';
import './components/typography/ecv-paragraph.js';
import './components/container/ecv-container-flex.js';
import './components/container/ecv-container-grid.js';
import './components/input/ecv-input.js'; 
import './components/input/ecv-input-range.js';
import './components/input/ecv-input-range-colorful.js';
import './components/modal/ecv-modal-container.js';
import './components/button/ecv-button-icon-text.js';
import './components/image/ecv-image.js';
import './components/button/ecv-button-icon.js';
import './components/modal/ecv-modal-header-body.js';
import './components/button/ecv-button-icon-hover.js';

const cursorWhite = 'https://access.equalweb.com/assets/images/cursors/bigcursorwhite.cur';
const cursosBlack = 'https://access.equalweb.com/assets/images/cursors/bigcursorblack.cur';
const cursorPointerWhite = 'https://access.equalweb.com/assets/images/cursors/bighandwhite.cur';
const cursorPointerBlack = 'https://access.equalweb.com/assets/images/cursors/bighandblack.cur';

const DIRECTORY = "/Accessibility/";

//Style do ECV-ACCESSIBILITY
const myStyleMain = `<link rel="stylesheet" href="./css/ecv-accessibility.css">`;

//Style da API do ICON
const myStyleIcon = `<link rel="stylesheet" href="./css/materialSymbols.css">`;

document.head.insertAdjacentHTML("afterbegin", myStyleMain);
document.head.insertAdjacentHTML("afterbegin", myStyleIcon);

const backgrounHoverButton = "#F1F1F1";
const colorTextHover = "#000";

/***
 * @class
 */
export class ECVAccessibility extends LitElement{

    /***
     * @constructor
     */
    constructor(){
        super();
        this.modalSize = "";
        this.openAndCloseModal = false;
        this.colorBlindnessButton = false;
        this.monochromeButton = false;
        this.highlightLinksButton = false;
        this.fontSizeButton = false;
        this.spacingLineTextButton = false;
        this.wordSpaceButton = false;
        this.myArticleState = false;
        this.bodyParameters = document.querySelector('body');
        this.myAllHtml = document.querySelector("*");
        this.linkParameters = document.querySelectorAll("* body a");
        this.elementsParameters = document.querySelectorAll("* body h1, h2, h3, h4, h5, h6, p, span, strong, a, ul, ol, li, input, table");
        this.myNewWindow = '';
        this.backgroundBody = false;
        this.headerAllBody = false;
        this.contentColorBody = false;
        this.myCursorWhite = false;
        this.myCursorBlack = false;
        this.valueMaximumRange = 45;
        this.valueMinimumRange = 0;
        this.rangeFontSize = 0;
        this.rangeLineHeight = 0; 
        this.rangeWordSpacing = 0;
        this.baseCalcFontAdjutment = 5;
        this.rangeBarTextAdjustment = 10;
        this.rangeBarTextAdjustmentOpacity = 10;
        this.rangeBarFontSize = 10;
        this.rangeBarFontSizeOpacity = 10;
        this.rangeBarLineHeight = 10;
        this.rangeBarLineHeightOpacity = 10;
        this.rangeBarWordSpacin = 10;
        this.rangeBarWordSpacinOpacity = 10;
        this.myAllBodyHeader = document.querySelectorAll("* body header, h1, h2, h3, h4, h5, h6");
        this.myAllBodyContent = document.querySelectorAll("* body p, a, ul, li, span");
        this.boxShadowButtomMinors = "1px 1px 3px rgba(0, 0, 0, 0.541)";
        this.boxShadowButtomBigger = "2px 2px 3px rgba(0, 0, 0, 0.200)";
        this.colorDefaultHeader = [];
        this.colorDefaultContent = [];
        this.colorDefaultLink = [];
        this.myStateManage = false;
        this.colorBodyAllDefault();  
        this.checkButtonStatusFontSize = true;
        this.checkButtonStatusLineHeight = true;
        this.checkButtonStatusWordSpacing = true;
        this.fontSizeValuesDefault = "";  
        this.lineHeightValuesDefault = "";
        this.wordSpacingValuesDefault = "";
        this.ternaryButtonBackgroundWhiteCursor = "";
        this.ternaryButtonColorWhiteCursor = "";
        this.ternaryButtonBackgroundBlackCursor = "";
        this.ternaryButtonColorBlackCursor = "";
        this.ternaryButtonBackgroundInputColor = "";
        this.ternaryColorTypographyInputColor = "";
        this.ternaryButtonBackgroundInputColorHeader = "";
        this.ternaryColorTypographyInputColorHeader = "";
        this.ternaryButtonBackgroundInputColorContent = "";
        this.ternaryColorTypographyInputColorContent = "";
        this.ternaryButtonBackgroundManage = "";
        this.ternaryColorTypographyIconManage = "";
        this.ternaryColorTypographyManage = "";
        this.ternaryButtonBackgroundLink = "";
        this.ternaryColorTypographyIconLink = "";
        this.ternaryColorTypographyLink = "";
        this.ternaryButtonBackgroundMonochrome = "";
        this.ternaryColorTypographyIconMonochrome = "";
        this.ternaryColorTypographyMonochrome = "";
        this.ternaryButtonBackgroundBlindness = "";
        this.ternaryColorTypographyIconcolorBlindness = "";
        this.ternaryColorTypographycolorBlindness = "";
        this.ternaryButtonBackgroundFontSize = "";
        this.ternaryColorTypographyFontSize = "";
        this.ternaryColorTypographyLineHeight = "";
        this.ternaryButtonBackgroundLineHeight = "";    
        this.ternaryColorTypographyTextSpace = "";
        this.ternaryButtonBackgroundTextSpace = ""; 
        this.myStateSymptoms = false;
        this.myStateTextReader = false;
        this.ternaryButtonBackgroundSymptoms = "";
        this.ternaryColorTypographyIconSymptoms = "";
        this.ternaryColorTypographySymptoms = "";
        this.ternaryBackgroundColorBlind = "";
        this.ternaryIconColorBlind = "";
        this.ternaryColorBlind = "";
        this.ternaryBackgroundColorTrack = "";
        this.ternaryIconColorTrack = "";
        this.ternaryColorTrack = "";
        this.ternaryBackgroundColorElderly = "";
        this.ternaryIconColorElderly = "";
        this.ternaryColorElderly = "";
        this.ternaryBoxShadowFontSize = "";
        this.ternaryBoxShadowLineHeight = "";
        this.ternaryBoxShadowTextSpace = "";
        this.ternaryBoxShadowBlackCursor = "";
        this.ternaryBoxShadowWhiteCursor = "";
        this.ternaryBoxShadowColorHeader = "";
        this.ternaryBoxShadowInputColor = "";
        this.ternaryBoxShadowBlackColorContent = "";
        this.ternaryBoxShadowTypographyManage = "";
        this.ternaryBoxShadowTypographyLink = "";
        this.ternaryBoxShadowTypographyMonochrome = "";
        this.ternaryBoxShadowTypographycolorBlindness = "";
        this.ternaryBoxShadowColorBlind = "";
        this.ternaryBoxShadowColorElderly = "";
        this.ternaryBoxShadowColorTrack = "";
        this.ternaryBackgroundColorTextReader = "";
        this.ternaryIconColorTextReader = "";
        this.ternaryButtonBackgroundArticle = "";
        this.ternaryColorTypographyArticle = "";
        this.ternaryColorTypographyIconArticle = "";
        this.ternaryBoxShadowTypographyArticle = "";
        this.ternaryBackgroundColorSignLanguage = "";
        this.ternaryColorSignLanguage = "";
        this.ternaryIconColorSignLanguage = "";
        this.ternaryBoxShadowColorSignLanguage = "";
        this.ternaryColorTypographycolorTextReader = "";
        this.ternaryColorTypographyIconcolorTextReader = "";
        this.ternaryButtonBackgroundTextReader = "";
        this.activeBlind = false;
        this.stateTrack = false;
        this.myStateElderly = false;
        this.myCurrentPageAudima = false;
        this.createScriptLibras();
        this.createBodyApiLibras();  
        
        this.vLibra = document.querySelector(".enabled");
        this.activeButtonLibra = document.querySelector(".active");
        this.vLibra.style.display = "none";    
    }   

    /***
     * @method
     * @override
     * @static
     */
    static get styles(){
      return css`
        .destaque__texto{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }

        .header__img{
            color: white;
            margin: 10px 5% 0px 5%;      
        }

        .header__text{
            color: white;
            padding: 0px 0px 10px 0px;
            margin-right: 50px;
        }

        .colorOptions__defaultColor{
            display: flex;
            flex-direction: row;
            justify-content: right;
            align-items: center;
            justify-content: right;
            width: 100%;
            padding: 0px;
            margin: 5px 0px 5px 0px;
        }

        .ecvContainerFlexInternalBoxes__standard{
            border: 2px solid #c9c9c9;
            border-radius: 10px;
          
        }

        .ecvContainerGridInternalBoxes__standard{
            padding: 10px 0px;
        }

        .colorOptions__resetColorButton{
            height: 30px;
            margin-right: 2%;
        }

        .colorOptions__resetColorButton:hover{
            border: 1px solid #2d77b4;
            border-radius: 10px;
        }

        .adjustmentModalBlock{
            display: none;
        }

        .resetAccessibility{
            height: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: -0.45rem;
        }
        
      `;
    }

    firstUpdated(){
        this.expansionModalOpen = this.shadowRoot?.querySelector('.expansionModalOpen');
        this.expansionModalClose = this.shadowRoot?.querySelector('.expansionModalClose');
        this.adjustmentModalBlock = this.shadowRoot?.querySelector('.adjustmentModalBlock');
        this.linkParametersModal = this.shadowRoot?.querySelectorAll('a');
        this.expansionModalClose.style.display = "none";
        this.myModal = this.shadowRoot?.querySelector("ecv-modal");     
        this.myInputColorful = this.shadowRoot?.querySelector("ecv-input-range-colorful");   
        this.textReader = this.shadowRoot?.querySelector(".textReader");
        this.blind = this.shadowRoot?.querySelector(".blind");
        this.elderly = this.shadowRoot?.querySelector(".elderly");

        this.currentPage();
    }   

    render(){

        this.ternaryButtonIconBackgroundColor();

        const blindnessBackground = this.colorBlindnessButton === true ? "black" : "white";
        const blindnessColors = this.colorBlindnessButton === true ? "white" : "black";
        const blindnessBackgroundModal = this.colorBlindnessButton === true ? "black" : "#2d77b4";
        const modalBorderColor = this.colorBlindnessButton === true ? "white" : "black";

        this.rangeTextAdjustment = this.fontSizeButton === true ? this.rangeBarFontSize :
                        this.spacingLineTextButton === true ? this.rangeBarLineHeight :
                        this.wordSpaceButton === true ? this.rangeBarWordSpacin : this.rangeBarFontSize;

        this.rangeTextAdjustmentOpacity = this.fontSizeButton === true ? this.rangeBarFontSizeOpacity :
                             this.spacingLineTextButton === true ? this.rangeBarLineHeightOpacity :
                             this.wordSpaceButton === true ? this.rangeBarWordSpacinOpacity : this.rangeBarFontSizeOpacity;
                             
        this.divGradient = `to right, #8eb6d7 ${this.rangeTextAdjustment}%, #e5eef5 ${this.rangeTextAdjustmentOpacity}%`;

        

        return html`
            <ecv-modal width="500px" height=${this.modalSize} modalBorderColor=${modalBorderColor} background=${blindnessBackground} color=${blindnessColors} display="flex" justifyContent="center" alignItems="start" flexDirection="row-reverse" marginTop="20px" borderRadius="21px" marginBottom="20px">

                <!-- <ecv-button-icon slot="closeModal" nameIcon="close" height="30px" width="30px" borderRadius="50%" display="flex" justifyContent="center" alignItems="center" paddingAll="20px" marginTop="20px" marginLeft="5px" border="none" backgroundColor="#ededed" fontFamily="robotoRegular" .function=${() => {this.closeAccessibility()}}></ecv-button-icon> -->
                <!--HEADER-->
                <header slot="header">
                    <ecv-container-flex display="flex" flexDirection="row" background=${blindnessBackgroundModal} alignItems="center" justifyContent="center" borderRadius="20px 20px 0px 0px"
                    height="130px">
                        <div class="header__img">
                            <ecv-image source="./images/icons/accessibility.svg" width="76px" height="76px"></ecv-image>
                            </ecv-icon>
                        </div>
                        <div class="header__text">
                            <ecv-title fontFamily="robotoRegular" nivelDeTitulo="1" text="Acessibilidade" fontFamily="Arial" fontSize="19px" marginTop="0px"></ecv-title>
                           <strong class="destaque__texto">Dica:</strong> <ecv-paragraph fontFamily="robotoRegular" fontFamily="arial" fontSize="14px" text="Você pode acessar os menus utilizando o seu teclado. Navegue através da tecla TAB." marginAll="0px" display="inline"></ecv-paragraph>
                        </div>
                    </ecv-container-flex>
                </header>

                    <!--MAIN-->
                <main slot="main">
                    <!--Accessibility Profile-->
                    <ecv-title fontFamily="robotoRegular" nivelDeTitulo="2" fontFamily="arial" fontSize="18px" marginAll="20px 20px 20px 20px" text="Perfil de Acessibilidade"></ecv-title>
                    <!--FIRST MODAL BLOCK-->
                    <ecv-container-grid display="grid" gridTemplateColumn="230px 230px" gridTemplateRow="50px 50px" justifyContent="center" gridColumnsGap="10px" gridRowGap="8px">
                        <!--Blind People -->
                        <ecv-button-icon-text-hover class="blind" heightDivHover="86px" divHoverMarginTop="-5.3rem" width="230px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ajustar para Pessoas Cegas" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Visibility_off" text="Pessoa Cega" .function=${() => {this.myStateElderly = false; this.stateTrack = false;this.myStateSymptoms = false;this.stateBlind() ;this.activeMyBlind()}} backgroundColor="#fff" backgroundColor=${this.ternaryBackgroundColorBlind}  color=${this.ternaryColorBlind} colorIcon=${this.ternaryIconColorBlind} boxShadow="${this.ternaryBoxShadowColorBlind}"></ecv-button-icon-text-hover>
                        <!--Color Blindness-->
                        <ecv-button-icon-text-hover heightDivHover="27px" widthDivHover="172px" paddingDivHover="30px" divHoverMarginTop="-5.3rem" width="230px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ajustar para pessoas com Daltonismo" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Track_Changes" text="Pessoa com Daltonismo" .function = ${() => {this.headerAllBody = false; this.contentColorBody = false; this.backgroundBody = false; this.myStateElderly = false; this.myStateSymptoms = false;this.activeBlind = false;this.stateTrackChanges(); this.trackChanges()}} backgroundColor="#fff" backgroundColor=${this.ternaryBackgroundColorTrack} color=${this.ternaryColorTrack} colorIcon=${this.ternaryIconColorTrack} boxShadow="${this.ternaryBoxShadowColorTrack}"></ecv-button-icon-text-hover>
                        <!--People With Low Vision-->
                        <ecv-button-icon-text-hover heightDivHover="35px" divHoverMarginTop="-5.3rem" width="230px" widthDivHover="180px" paddingDivHover="25px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ajustar para pessoas com Baixa Visão" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Symptoms" text="Pessoa com Baixa Visão" backgroundColor="#fff" .function=${() => {this.headerAllBody = false; this.contentColorBody = false; this.backgroundBody = false; this.myStateElderly = false; this.stateTrack = false;this.activeBlind = false;this.stateSymptoms(); this.symptoms()}} backgroundColor=${this.ternaryButtonBackgroundSymptoms} color=${this.ternaryColorTypographySymptoms} colorIcon=${this.ternaryColorTypographyIconSymptoms} boxShadow="${this.ternaryBoxShadowSymptoms}"></ecv-button-icon-text-hover>  
                        <!--Elderly Person-->
                        <ecv-button-icon-text-hover class="elderly" heightDivHover="56px" divHoverMarginTop="-5.3rem" width="230px" widthDivHover="200px" paddingDivHover="1rem"  backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ajustar para pessoas na Terceira Idade" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Elderly" text="Pessoa na Terceira Idade" backgroundColor="#fff" .function=${() => {this.myStateSymptoms = false; this.stateTrack = false;this.activeBlind = false;this.stateElderly(); this.activeElderly()}} backgroundColor=${this.ternaryBackgroundColorElderly} color=${this.ternaryColorElderly} colorIcon=${this.ternaryIconColorElderly} boxShadow="${this.ternaryBoxShadowColorElderly}"></ecv-button-icon-text-hover>
                    </ecv-container-grid>

                    <!--SECOND MODAL BLOCK-->
                        <!--Sign Language-->
                    <ecv-container-grid gridTemplateColumn="94%" justifyContent="center" marginTop="5px"  paddingAll="2px 0px">
                        <ecv-button-icon-text-hover  divHoverMarginTop="0rem" heightDivHover="66px" widthDivHover="45rem" divHoverMarginLeft="-20rem" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover}  textDivHover="Ativar Libras" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" display="flex" justifyContent="center" gap="5px" alignItems="center" nameIcon="Sign_Language" text="Libras" backgroundColor="#fff" .function=${() => {this.vLibras()}} backgroundColor=${this.ternaryBackgroundColorSignLanguage} color=${this.ternaryColorSignLanguage} colorIcon=${this.ternaryIconColorSignLanguage} boxShadow="${this.ternaryBoxShadowColorSignLanguage}"></ecv-button-icon-text-hover>
                    </ecv-container-grid>

                    <!--Custom Settings-->
                    <ecv-container-flex alignItems="center" marginAll="4px 0px 0px 20px">
                        <ecv-title fontFamily="robotoRegular" nivelDeTitulo="2" text="Ajustes Personalizados" fontFamily="arial" fontSize="18px" fontWeight="100" marginAll="20px 0px 8px 0px" color='#777'></ecv-title>
                        <div class="expansionModalClose">
                            <ecv-icon name="Arrow_Drop_Up" marginTop="15px" fontSize="30px" .function=${() => {this.stateModal(); this.colapsedModalAdjustment()}} cursor="pointer"></ecv-icon>
                        </div>
                        <div class="expansionModalOpen">
                            <ecv-icon name="Arrow_Drop_Down" marginTop="15px" fontSize="30px" .function=${() => {this.stateModal(); this.colapsedModalAdjustment()}} cursor="pointer"></ecv-icon>
                        </div>
                   </ecv-container-flex>

                <div class="adjustmentModalBlock">   
                   <!--Color and Content Adjustment-->
                   <ecv-title fontFamily="robotoRegular" nivelDeTitulo="2" text="Ajuste de Cor e Conteúdo" fontFamily="arial" fontSize="18px" marginAll="0px 20px 20px 20px" paddingTop="20px" borderTop="2px solid #c9c9c9" width="94%"></ecv-title>

                   <!--THIRD MODAL BLOCK-->
                       <ecv-container-grid  gridTemplateColumn="150px 150px 150px" justifyContent="center" gridColumnsGap="8px" gridRowGap="8px">
                            <!--Monochrome-->
                            <ecv-button-icon-text-hover width="150px" widthDivHover="140px" divHoverMarginTop="-5.5rem" fontSizeDivHover="14px" paddingDivHover="5px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Alterar para Preto e Branco" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Invert_Colors_Off" text="Monocromático" backgroundColor="#fff" .function = ${() => {this.changeStateButtons(); this.resetAllColorHTML(); this.resetAllStateButtonColorInputColorful(); this.resetColorBlindnessMode(); this.resetNewWindow(); this.resetManageSearch(); this.resetHighlightLinks(); this.stateMonochrome(); this.monochromeMode();}} backgroundColor=${this.ternaryButtonBackgroundMonochrome} color=${this.ternaryColorTypographyMonochrome} colorIcon=${this.ternaryColorTypographyIconMonochrome} boxShadow="${this.ternaryBoxShadowTypographyMonochrome}"></ecv-button-icon-text-hover> 
                             <!--Contrast-->  
                            <ecv-button-icon-text-hover width="150px" widthDivHover="140px" divHoverMarginTop="-5.5rem" fontSizeDivHover="14px" paddingDivHover="5px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Alterar contraste para facilitar a leitura e compreensão" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Contrast" text="Contraste" backgroundColor="#fff" .function = ${() => {this.changeStateButtons(); this.resetHighlightLinks(); this.resetManageSearch(); this.stateColorBlindness(); this.colorBlindnessMode()}} backgroundColor=${this.ternaryButtonBackgroundBlindness} color=${this.ternaryColorTypographycolorBlindness} colorIcon=${this.ternaryColorTypographyIconcolorBlindness} boxShadow="${this.ternaryBoxShadowTypographycolorBlindness}"></ecv-button-icon-text-hover>
                            <!--Text Reader-->
                            <ecv-button-icon-text-hover class="textReader" width="150px" widthDivHover="140px" divHoverMarginTop="-5.5rem" fontSizeDivHover="14px" paddingDivHover="5px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Para ler o texto em voz alta automaticamente" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Text_To_Speech" text="Leitor de Texto" backgroundColor="#fff" backgroundColor="${this.ternaryButtonBackgroundTextReader}" color=${this.ternaryColorTypographycolorTextReader} colorIcon=${this.ternaryColorTypographyIconcolorTextReader} .function=${() => {this.stateTextReader(); this.textReader()}}></ecv-button-icon-text-hover>
                            <!--Reading Mode-->
                            <ecv-button-icon-text-hover width="150px" widthDivHover="140px" divHoverMarginTop="-5.5rem" fontSizeDivHover="14px" paddingDivHover="5px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Apresentar o conteúdo da página em uma nova janela, de forma clara e legível" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Article" text="Modo Leitura" backgroundColor="#fff" .function=${() => {this.stateArticle(); this.article();}} backgroundColor=${this.ternaryButtonBackgroundArticle} color=${this.ternaryColorTypographyArticle} colorIcon=${this.ternaryColorTypographyIconArticle} boxShadow="${this.ternaryBoxShadowTypographyArticle}"></ecv-button-icon-text-hover>
                            <!--Text Magnifier-->
                            <ecv-button-icon-text-hover width="150px" widthDivHover="131px" heightDivHover="68px" divHoverMarginTop="-5.5rem" fontSizeDivHover="14px" paddingDivHover="10px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} height="85px" textDivHover="Ampliar o conteúdo selecionado, exibindo-o maior" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Manage_Search" text="Ampliador de Texto" backgroundColor="#fff" paddingAll="0px" iconSize="49px" .function=${() => {this.stateManageSearch();this.manageSearch()}} backgroundColor=${this.ternaryButtonBackgroundManage} color=${this.ternaryColorTypographyManage} colorIcon=${this.ternaryColorTypographyIconManage} boxShadow="${this.ternaryBoxShadowTypographyManage}"></ecv-button-icon-text-hover>
                            <!--Highlight Links-->
                            <ecv-button-icon-text-hover width="150px" widthDivHover="140px" divHoverMarginTop="-5.5rem" fontSizeDivHover="14px" paddingDivHover="5px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Destacar Links da página" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Format_Ink_Highlighter" text="Destacar Links" backgroundColor="#fff" .function = ${() => {this.defaultColorHighlightLinks();this.statehighlightLinks(); this.highlightLinks()}} backgroundColor=${this.ternaryButtonBackgroundLink} color=${this.ternaryColorTypographyLink} colorIcon=${this.ternaryColorTypographyIconLink} boxShadow="${this.ternaryBoxShadowTypographyLink}"></ecv-button-icon-text-hover>
                       </ecv-container-grid>

                       <!--ADJUSTMENT MODAL-->
                        <!--Font Adjustment-->
                        <ecv-container-flex flexDirection="column" justifyContent="center" width="94%" rowGap="8px" marginTop="15px" paddingAll="0px 15px">
                            <ecv-container-flex flexDirection="column"  class="ecvContainerFlexInternalBoxes__standard">
                                <ecv-container-grid gridTemplateColumn="55px auto">
                                    <div>
                                        <ecv-icon name="Sort_By_Alpha" paddingAll="5px 5px 5px 10px" fontSize="35px"></ecv-icon>
                                    </div>
                                    <div>
                                        <ecv-title fontFamily="robotoRegular" nivelDeTitulo="3" text="Ajuste de fontes" marginAll="7px 0px 0px 0px" fontFamily="arial" fontSize="16px"></ecv-title>
                                        <ecv-paragraph fontFamily="robotoRegular" text="Aumentar e diminuir o tamanho e tipo de letra" fontFamily="arial"></ecv-paragraph>
                                    </div>
                                <!--Text Options-->
                                </ecv-container-grid>
                                <ecv-container-grid class="ecvContainerGridInternalBoxes__standard" gridTemplateColumn="140px 140px 140px" justifyContent="center" gridColumnsGap="4px">
                                    <!--Font Size-->
                                    <ecv-button-icon-text-hover width="140px" paddingDivHover="5px" display="flex" divHoverMarginLeft="-8.7rem" heightDivHover="50px" widthDivHover="140px" divHoverMarginTop="0px" fontSizeDivHover="14px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Aumentar tamanho da fonte" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} text="Tamanho da fonte" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover} fontFamily="robotoRegular" .function=${() => {this.stateFontSize(); this.pickDefaultFontSizeValues()}} color=${this.ternaryColorTypographyFontSize} backgroundColor=${this.ternaryButtonBackgroundFontSize} boxShadow="${this.ternaryBoxShadowFontSize}"></ecv-button-icon-text-hover>
                            
                                    <!--Line spacing-->
                                    <ecv-button-icon-text-hover width="140px" paddingDivHover="5px" display="flex" divHoverMarginLeft="-8.2rem" heightDivHover="50px" widthDivHover="140px" divHoverMarginTop="0px" fontSizeDivHover="14px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ajustar o espaçamento entre linhas" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} text="Espaçamento entre linhas" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover}  fontFamily="robotoRegular" .function=${() => {this.stateSpacingTextLine(); this.pickDefaultLineHeightValues()}} color=${this.ternaryColorTypographyLineHeight} backgroundColor=${this.ternaryButtonBackgroundLineHeight} boxShadow="${this.ternaryBoxShadowLineHeight}"></ecv-button-icon-text-hover>
                                   
                                    <!--Word Spacing-->
                                    <ecv-button-icon-text-hover width="140px" paddingDivHover="5px" display="flex" divHoverMarginLeft="-8.2rem" heightDivHover="50px" widthDivHover="140px" divHoverMarginTop="0px" fontSizeDivHover="14px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ajustar o espaçamento entre palavras" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} text="Espaçamento entre palavras" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover}  fontFamily="robotoRegular" .function=${() =>{this.stateWordSpace(); this.pickDefaultWordSpacingValues()}} color=${this.ternaryColorTypographyTextSpace} backgroundColor=${this.ternaryButtonBackgroundTextSpace} boxShadow="${this.ternaryBoxShadowTextSpace}"></ecv-button-icon-text-hover>
                                   
                                </ecv-container-grid>
                                        <ecv-container-flex width="450px" height="20px" justifyContent="space-between" alignItems="center" borderRadius="20px"  marginAll="0 0 10px 8px" 
                                        backgroundGradient="${this.divGradient}">
                                            <div>
                                                <ecv-button-icon-text ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Remove" borderRadius="50%" width="28px" height="28px" background="#2d77b4" colorIcon="white" iconSize="18px" paddingAll="3px 0px 0px 1px" .function=${() => {this.rangeExpansionLower(); this.changeFontSizeLower(); this.changeSpacingLineLower(); this.changeWordSpacingLower()}}></ecv-button-icon-text>
                                            </div>
                                            <div>
                                                <ecv-button-icon-text ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" nameIcon="Add" borderRadius="50%" width="28px" height="28px" background="#2d77b4"  colorIcon="white" iconSize="18px" paddingAll="3px 0px 0px 1px" .function=${() => {this.rangeExpansionUpper(); this.changeFontSizeUpper(); this.changeSpacingLineUpper(); this.changeWordSpacingUpper()}}></ecv-button-icon-text>      
                                            </div>
                                        </ecv-container-flex>
                            </ecv-container-flex>

                        <!--Custom Color-->
                            <ecv-container-flex flexDirection="column" class="ecvContainerFlexInternalBoxes__standard" height="170px">
                                <ecv-container-grid gridTemplateColumn="55px auto">
                                    <div>
                                        <ecv-icon name="Invert_Colors" paddingAll="5px 5px 5px 10px" fontSize="35px"></ecv-icon>
                                    </div>
                                    <div>
                                        <ecv-title fontFamily="robotoRegular" nivelDeTitulo="3" text="Cor Personalizada" marginAll="7px 0px 0px 0px" fontFamily="arial" fontSize="16px"></ecv-title>
                                        <ecv-paragraph fontFamily="robotoRegular" text="Alterar as cores da página" fontFamily="arial"></ecv-paragraph>
                                    </div>

                                <!--Color Options-->
                                </ecv-container-grid>
                                <ecv-container-grid class="ecvContainerGridInternalBoxes__standard" gridTemplateColumn="140px 140px 140px" justifyContent="center" gridColumnsGap="4px">
                                    <!--Background-->
                                    <ecv-button-icon-text-hover width="140px"  display="flex" justifyContent="center" divHoverMarginLeft="-8.7rem" heightDivHover="41px" widthDivHover="140px" divHoverMarginTop="0px" fontSizeDivHover="14px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Alterar as cores da página" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} text="Plano de Fundo" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover} fontFamily="robotoRegular" .function=${() => {this.resetMonochromeMode(); this.stateBackgroundColorBody()}} color=${this.ternaryColorTypographyInputColor} backgroundColor=${this.ternaryButtonBackgroundInputColor} boxShadow="${this.ternaryBoxShadowInputColor}"></ecv-button-icon-text-hover>
                                    <!--Header-->
                                    <ecv-button-icon-text-hover width="140px" display="flex" divHoverMarginLeft="-8.2rem" justifyContent="center" paddingDivHover="5px"  heightDivHover="35px" widthDivHover="140px" divHoverMarginTop="-2.5px" fontSizeDivHover="14px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Alterar as cores da página" text="Cabeçalhos" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover} ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" .function=${() => {this.resetMonochromeMode(); this.stateHeaderColorBody()}} color=${this.ternaryColorTypographyInputColorHeader} backgroundColor=${this.ternaryButtonBackgroundInputColorHeader} boxShadow="${this.ternaryBoxShadowColorHeader}"></ecv-button-icon-text-hover>
                                    <!--Contents-->
                                    <ecv-button-icon-text-hover width="140px" display="flex" divHoverMarginLeft="-8.2rem" justifyContent="center" paddingDivHover="5px"  heightDivHover="35px" widthDivHover="140px" divHoverMarginTop="-2.5px" fontSizeDivHover="14px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Alterar as cores da página" text="Conteúdos" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover} ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" .function=${() => {this.resetMonochromeMode(); this.stateContentColorBody()}} color=${this.ternaryColorTypographyInputColorContent} backgroundColor=${this.ternaryButtonBackgroundInputColorContent} boxShadow="${this.ternaryBoxShadowBlackColorContent}"></ecv-button-icon-text-hover>
                                </ecv-container-grid>
                                    <!--Change Color-->
                                <ecv-input-range-colorful width="94%" ?backgroundAllBody=${this.backgroundBody} ?headerAllBody=${this.headerAllBody} ?contentAllBody=${this.contentColorBody}></ecv-input-range-colorful>
                                    <!--Reset Color Button-->
                                    <div class="colorOptions__defaultColor">
                                        <ecv-button-icon-text-hover marginTop="-0.4rem" width="160px" paddingDivHover="5px" divHoverMarginTop="-0.4rem" display="flex" divHoverMarginLeft="-10.2rem" justifyContent="center" paddingDivHover="5px" heightDivHover="28px" widthDivHover="150px" divHoverMarginTop="-2.5px" fontSizeDivHover="14px" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Redefinir cores" text="Redefinir cores" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} color=${blindnessColors} fontFamily="robotoRegular" nameIcon="Restart_Alt"  display="flex" flexDirection="row" alignItems="center" iconSize="27px" border="none" backgroundColor="transparent" colorIcon=${blindnessColors} cursor="pointer" .function=${() => {this.resetAllColorHTML()}}></ecv-button-icon-text-hover>
                                       
                                    </div>
                            </ecv-container-flex>

                        <!--Cursor-->
                            <ecv-container-flex flexDirection="column" class="ecvContainerFlexInternalBoxes__standard">
                                <ecv-container-grid gridTemplateColumn="55px auto">
                                    <div>
                                        <ecv-icon name="Arrow_Selector_Tool" paddingAll="5px 5px 5px 10px" fontSize="35px"></ecv-icon>
                                    </div>
                                    <div>
                                        <ecv-title fontFamily="robotoRegular" nivelDeTitulo="3" text="Cursor" marginAll="7px 0px 0px 0px" fontFamily="arial" fontSize="16px"></ecv-title>
                                        <ecv-paragraph fontFamily="robotoRegular" text="Ampliar e alterar a cor do cursor" fontFamily="arial"></ecv-paragraph>
                                    </div>
                                    <!--Cursor Options-->
                                </ecv-container-grid>
                                <ecv-container-grid class="ecvContainerGridInternalBoxes__standard" gridTemplateColumn="45% 45%" justifyContent="center" gridColumnsGap="4px">
                                    <!--White-->
                                    <ecv-button-icon-text-hover divHoverMarginLeft="-12.5rem" heightDivHover="25px" divHoverMarginTop="-0.2rem" paddingDivHover="5px" fontSizeDivHover="14px" display="flex" justifyContent="center" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ampliar e alterar a cor do cursor" fontFamily="robotoRegular" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover} text="Branco" fontFamily="robotoRegular" paddingAll="1px" .function=${() => {this.myCursorBlack = false;this.stateCursorWhite(); this.settingCursorCustom()}} backgroundColor=${this.ternaryButtonBackgroundWhiteCursor} color=${this.ternaryButtonColorWhiteCursor} boxShadow="${this.ternaryBoxShadowWhiteCursor}"></ecv-button-icon-text-hover>
                                   
                                    <!--Black-->
                                    <ecv-button-icon-text-hover divHoverMarginLeft="-12.5rem" heightDivHover="25px" divHoverMarginTop="-0.2rem" paddingDivHover="5px" fontSizeDivHover="14px" display="flex" justifyContent="center" backgroundDivColorHover="${backgrounHoverButton}" colorParagraphHover=${colorTextHover} textDivHover="Ampliar e alterar a cor do cursor" fontFamily="robotoRegular" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover} text="Preto" fontFamily="robotoRegular" paddingAll="1px" .function=${() => {this.myCursorWhite = false; this.stateCursorBlack(); this.settingCursorCustom()}} backgroundColor=${this.ternaryButtonBackgroundBlackCursor} color=${this.ternaryButtonColorBlackCursor} boxShadow="${this.ternaryBoxShadowBlackCursor}"></ecv-button-icon-text-hover>
                                    
                                </ecv-container-grid>
                            </ecv-container-flex>   

                            <div class="resetAccessibility">
                                <ecv-button text="Resetar tudo" ?myCursorBlack=${this.myCursorBlack} ?myCursorWhite=${this.myCursorWhite} fontFamily="robotoRegular" paddingAll="3px 29px" fontFamily="robotoRegular" width="471px" marginTop="5px" display="flex" flexDirection="row" alignItems="center" iconSize="27px" backgroundHover=${backgrounHoverButton} colorHover=${colorTextHover} backgroundColor="transparent" color=${blindnessColors} cursor="pointer" .function=${() => {this.resetAllAccessibility()}}></ecv-button>
                               
                            </div>
                       </ecv-container-flex>
                   </div>
                </main>    
            </ecv-modal>
        `;
    }

    /**
     * @method
     */
    ternaryButtonIconBackgroundColor(){
        //Leitor de Texto
        this.ternaryButtonBackgroundTextReader = this.myStateTextReader === true ? "#2d77b4": 
                                                 this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographycolorTextReader = this.myStateTextReader === true ? "white" : 
                                                     this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryColorTypographyIconcolorTextReader =  this.myStateTextReader === true ? "white" : 
                                                          this.colorBlindnessButton === true ? "white" : "#2d77b4";

        //Libras
        this.ternaryBackgroundColorSignLanguage = this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorSignLanguage = this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryIconColorSignLanguage = this.colorBlindnessButton === true ? "white" : "#2d77b4";

        //Modo leitura
        this.ternaryButtonBackgroundArticle = this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyArticle = this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryColorTypographyIconArticle = this.colorBlindnessButton === true ? "white" : "#2d77b4";

        //Pessoa com Baixa visão
        this.ternaryButtonBackgroundSymptoms = this.myStateSymptoms === true ? "#2d77b4" : 
                                               this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyIconSymptoms = this.myStateSymptoms === true ? "white" : 
                                                   this.colorBlindnessButton === true ? "white" : "#2d77b4";
        this.ternaryColorTypographySymptoms = this.myStateSymptoms === true ? "white" : 
                                               this.colorBlindnessButton === true ? "white" : "black";

        //Cursor White
        this.ternaryButtonBackgroundWhiteCursor = this.myCursorWhite === true ? "#2d77b4" : 
                                                     this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryButtonColorWhiteCursor = this.myCursorWhite === true ? "white" : 
                                                this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowWhiteCursor = this.myCursorWhite === true ? `${this.boxShadowButtomMinors}` : "white"

        //Cursor Black
        this.ternaryButtonBackgroundBlackCursor = this.myCursorBlack === true ? "#2d77b4" : 
                                                  this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryButtonColorBlackCursor = this.myCursorBlack === true ? "white" :  
                                             this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowBlackCursor  = this.myCursorBlack === true ? `${this.boxShadowButtomMinors}` : "white"

        //Cor Personalizada   
        //Plano de Fundo  
        this.ternaryButtonBackgroundInputColor = this.backgroundBody === true ? "#2d77b4" : 
                                                 this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyInputColor = this.backgroundBody === true ? "white" :  
                                                this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowInputColor = this.backgroundBody === true ? `${this.boxShadowButtomMinors}` : "white"

        //Cabeçalho
        this.ternaryButtonBackgroundInputColorHeader = this.headerAllBody === true ? "#2d77b4" :  
                                                        this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryBoxShadowColorHeader  = this.headerAllBody === true ? `${this.boxShadowButtomMinors}` : "white"
        this.ternaryColorTypographyInputColorHeader = this.headerAllBody === true ? "white" :  
                                                       this.colorBlindnessButton === true ? "white" : "black";
        
        //Conteúdos
        this.ternaryButtonBackgroundInputColorContent = this.contentColorBody === true ? "#2d77b4" : 
                                                        this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyInputColorContent = this.contentColorBody === true ? "white" :  
                                                        this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowBlackColorContent = this.contentColorBody === true ? `${this.boxShadowButtomMinors}` : "white"
        
        //Ampliador de Texto
        this.ternaryButtonBackgroundManage = this.myStateManage === true ? "#2d77b4" : 
                                             this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyIconManage = this.myStateManage === true ? "white" :  
                                                this.colorBlindnessButton === true ? "white" :"#2d77b4";
        this.ternaryColorTypographyManage = this.myStateManage === true ? "white" : 
                                            this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowTypographyManage = this.myStateManage === true ? `${this.boxShadowButtomBigger}` : "white";

        //Destaque de link
        this.ternaryButtonBackgroundLink = this.highlightLinksButton === true ? "#2d77b4" : 
                                             this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyIconLink = this.highlightLinksButton === true ? "white" :
                                              this.colorBlindnessButton === true ? "white" : "#2d77b4";
        this.ternaryColorTypographyLink = this.highlightLinksButton === true ? "white" :  
                                          this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowTypographyLink = this.highlightLinksButton === true ? `${this.boxShadowButtomBigger}` : "white"

        //Monocromático
        this.ternaryButtonBackgroundMonochrome = this.monochromeButton === true ? "#2d77b4" :
                                                 this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyIconMonochrome = this.monochromeButton === true ? "white" : 
                                                    this.colorBlindnessButton === true ? "white" : "#2d77b4";
        this.ternaryColorTypographyMonochrome = this.monochromeButton === true ? "white" : 
                                                this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowTypographyMonochrome = this.monochromeButton === true ? `${this.boxShadowButtomBigger}` : "white"

       //Contraste
        this.ternaryButtonBackgroundBlindness = this.colorBlindnessButton === true ? "#2d77b4" :  
                                                this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyIconcolorBlindness = this.colorBlindnessButton === true ? "white" : "#2d77b4";
        this.ternaryColorTypographycolorBlindness = this.colorBlindnessButton === true ? "white" :
                                                    this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowTypographycolorBlindness = this.colorBlindnessButton === true ? `${this.boxShadowButtomBigger}` : "white"
        
        //Tamanho de Fonte
        this.ternaryButtonBackgroundFontSize = this.fontSizeButton === true ? "#2d77b4" : 
                                               this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyFontSize =  this.fontSizeButton === true ? "white" :  
                                               this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowFontSize = this.fontSizeButton === true ? `${this.boxShadowButtomMinors}` : "white"

        //Line Height 
        this.ternaryButtonBackgroundLineHeight = this.spacingLineTextButton === true ? "#2d77b4" :
                                                this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyLineHeight =  this.spacingLineTextButton === true ? "white" :
                                                this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowLineHeight = this.spacingLineTextButton === true ? `${this.boxShadowButtomMinors}` : "white"
                                            
        //Word Spacing
        this.ternaryButtonBackgroundTextSpace = this.wordSpaceButton === true ? "#2d77b4" : 
                                                this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryColorTypographyTextSpace = this.wordSpaceButton === true ? "white" : 
                                                this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowTextSpace = this.wordSpaceButton === true ? `${this.boxShadowButtomMinors}` : "white"
        
        //Blind People
        this.ternaryBackgroundColorBlind = this.activeBlind === true ? "#2d77b4" : 
                                           this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryIconColorBlind = this.activeBlind === true ? "white" : 
                                     this.colorBlindnessButton === true ? "white" : "#2d77b4";
        this.ternaryColorBlind = this.activeBlind === true ? "white" : 
                                    this.colorBlindnessButton === true ? "white" : "black";
        this.ternaryBoxShadowColorBlind  = this.activeBlind === true ? `${this.boxShadowButtomBigger}` : "white"

        //Color Blindness People
        this.ternaryBackgroundColorTrack = this.stateTrack === true ? "#2d77b4" : 
                                            this.colorBlindnessButton === true ? "black" : "white";
        this.ternaryIconColorTrack = this.stateTrack === true ? "white" :  
                                     this.colorBlindnessButton === true ? "white" : "#2d77b4";
        this.ternaryColorTrack = this.stateTrack === true ? "white" : 
                                 this.colorBlindnessButton === true ? "white" : "black";
                                           
        this.ternaryBoxShadowColorTrack  = this.stateTrack === true ? `${this.boxShadowButtomBigger}` : "white"

        //Elderly People
        this.ternaryBackgroundColorElderly = this.myStateElderly === true ? "#2d77b4" : 
                                             this.colorBlindnessButton === true ? "black" : "white";
                                             
        this.ternaryColorElderly = this.myStateElderly === true ? "white" :  
                        this.colorBlindnessButton === true ? "white" : "black";

        this.ternaryIconColorElderly = this.myStateElderly === true ? "white" : 
                                       this.colorBlindnessButton === true ? "white" : "#2d77b4";
      
        this.ternaryBoxShadowColorElderly  = this.myStateElderly === true ? `${this.boxShadowButtomBigger}` : "white"

        
    }

    /**
     * @method
     */
    closeAccessibility(){
        this.style.display = "none";
    }

    /***
     * @method
     */
    stateModal(){
        this.openAndCloseModal = !this.openAndCloseModal;

        this.requestUpdate();
    }

    /***
     * @method
     */
    stateColorBlindness(){
        this.colorBlindnessButton = !this.colorBlindnessButton;

        this.requestUpdate();
    }
    
    /***
     * @method
     */
    stateMonochrome(){
        this.monochromeButton = !this.monochromeButton;

        this.requestUpdate();
    }
    
    /***
     * @method
     */
    statehighlightLinks(){
        
        this.highlightLinksButton = !this.highlightLinksButton;

        this.requestUpdate();
    }

    /***
     * @method
     */
    stateFontSize(){
        if(this.spacingLineTextButton === true || this.wordSpaceButton === true){
            this.wordSpaceButton = false;
            this.spacingLineTextButton = false;
        }
        this.fontSizeButton = !this.fontSizeButton;

        this.requestUpdate();
    }

    /***
     * @method
     */
    stateSpacingTextLine(){
        if(this.fontSizeButton === true || this.wordSpaceButton === true){
            this.wordSpaceButton = false;
            this.fontSizeButton = false;
        }
        this.spacingLineTextButton = !this.spacingLineTextButton;

        this.requestUpdate();
    }

    /***
     * @method
     */
    stateWordSpace(){
        if(this.fontSizeButton === true || this.spacingLineTextButton === true){
            this.spacingLineTextButton= false;
            this.fontSizeButton = false;
        }
        this.wordSpaceButton = !this.wordSpaceButton;

        this.requestUpdate();
    }

    /**
     * @method
     */
    stateSymptoms(){
        this.myStateSymptoms = !this.myStateSymptoms;

        this.requestUpdate();
    }

    /**
     * @method
     */
    stateBlind(){
        this.activeBlind = !this.activeBlind;

        this.requestUpdate();
    }

    /**
     * @method
     */
    stateTrackChanges(){
        this.stateTrack = !this.stateTrack;

        this.requestUpdate();
    }

    /**
     * @method
     */
    symptoms(){
        if(this.myStateSymptoms === true){
            this.colorBlindnessButton = true;
            this.colorBlindnessMode();

            this.highlightLinksButton = true;
            this.highlightLinks();

            this.myStateManage = true;
            this.showMyAriaLabelManage();
            
            this.stateFontSize();
            this.pickDefaultFontSizeValues();
            this.rangeFontSize = 6;
            this.changeFontSizeUpper();     
        }else{
            this.resetAccessibility();
        }
    }

    /**
     * @method
     */
    stateElderly(){
        this.myStateElderly = !this.myStateElderly;

        this.requestUpdate();
    }

    /**
     * @method
     */
    activeElderly(){
        if(this.myStateElderly === true){
            this.myStateManage = true;
            this.showMyAriaLabelManage();
            this.stateFontSize();
            this.pickDefaultFontSizeValues();
            this.rangeFontSize = 6;
            this.changeFontSizeUpper();  
        }else{
            this.resetAccessibility();
        }
    }

    /**
     * @method
     */
    trackChanges(){
        if(this.stateTrack === true){
            this.colorBlindnessButton = true;
            this.colorBlindnessMode();
        }else{
            this.resetAccessibility();
        }
    }

    /**
     * @method
     */
    activeMyBlind(){
        if(this.activeBlind === true){
            this.resetAccessibility();
            this.myStateManage = true;
            this.showMyAriaLabelManage();
        }else{
            this.resetAccessibility();
        }   
    }

    /***
     * @method
     */
    colapsedModalAdjustment(){      
        if(this.openAndCloseModal == true){
            this.expansionModalOpen.style.display = 'none';
            this.expansionModalClose.style.display = 'block';
            this.adjustmentModalBlock.style.display = 'block';

            if(this.myCurrentPageAudima === false){
                this.modalSize = "1156px";
            }else{
                this.modalSize = "1250px";
            }
           
            this.requestUpdate();
        } else {
            this.expansionModalOpen.style.display = 'block';
            this.expansionModalClose.style.display = 'none';
            this.modalSize = "";
            this.adjustmentModalBlock.style.display = 'none';
            this.requestUpdate();
        } 
    }                  

    /***
     * @method
     */
    colorBlindnessMode(){
        if(this.colorBlindnessButton === true){
            this.bodyParameters.style.backgroundColor = "black"; 
          
            this.myAllBodyHeader.forEach((header) => {
                header.style.color = "white";
            });
    
            this.myAllBodyContent.forEach((content) => {
                content.style.color = "white";
            });

        } else {
            this.myAllBodyHeader.forEach((header, indice) => {
                header.style.color = this.colorDefaultHeader[indice];
            });
    
            this.myAllBodyContent.forEach((content, indice) => {
                content.style.color = this.colorDefaultContent[indice];
            });

            this.bodyParameters.style.filter = "invert(0)"; 
            this.bodyParameters.style.backgroundColor = "transparent";   
        }

        this.requestUpdate();
    }

    /**
     * @method
     */
    resetColorBlindnessMode(){
        this.colorBlindnessButton = false;
        this.colorBlindnessMode();
    }

    /***
     * @method
     */
    monochromeMode(){
        
        if(this.monochromeButton == true){
            this.bodyParameters.style.filter = "grayscale(100%)";   
        } else{
            this.bodyParameters.style.filter = "grayscale(0%)";        
        }

        this.requestUpdate();
    }

    /**
     * @method
     */
    resetMonochromeMode(){
        this.monochromeButton = false;
        this.bodyParameters.style.filter = "grayscale(0%)";
    }

    /**
     * @method
     */
    defaultColorHighlightLinks(){
        this.linkParameters.forEach((link) => {
            this.colorDefaultLink.push(getComputedStyle(link).color)
        });
    }
    
    /***
     * @method
     */
    highlightLinks(){    
        this.linkParameters.forEach((item) => {
            if(this.highlightLinksButton == true){
                item.style.color = "#F00";
                item.style.textDecoration = "underline";
            } else{
                this.linkParameters.forEach((link, indice) => {
                    link.style.color = this.colorDefaultLink[indice];
                });
                item.style.textDecoration = "underline";
            }
        });
    }
    
    /**
     * @method
     */
    resetHighlightLinks(){
        this.highlightLinksButton = false;
        this.highlightLinks();
    }

    /**
     * @method
     */
    currentPage(){
        if(location.href.includes('/AVA/') || location.href.includes('/AAPPA/')){
            this.myPageAudima = true;
            this.textReader.style.display = "block";
            this.blind.style.display = "block";
            this.elderly.style.display = "block";
            this.myCurrentPageAudima = true;
        }else{  
            this.myCurrentPageAudima = false;
            this.textReader.style.display = "none";
            this.blind.style.display = "none";
            this.elderly.style.display = "none";
        }

        this.requestUpdate();
    }

    /**
     * @method
     */
    stateTextReader(){
        this.myStateTextReader = !this.myStateTextReader;

        this.requestUpdate();
    }

    /**
     * @method
     */
    textReader(){
        if(this.myStateTextReader === true){

            if(peopleSymptoms === true){
                this.myStateSymptoms = true;
            }

            if(peopleElderly === true){
                this.myStateElderly = true;
            }

            this.myStateSymptoms = true;
            if(location.href.includes('/AVA/') || location.href.includes('/AAPPA/')){
                this.createAudima();
            }
        }
    }

    /**
     * @method
     */
    createAudima(){
        const AUDIMA = `<div id="audimaWidget" class="checked" aria-label="Player Audima" style="top: 20vh !important; right: 0px; position: fixed; z-index: 10000000;">
                            <iframe aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma" title="Audima-player" id="audima-iframe" width="50" height="62" scrolling="no" frameborder="no" src="https://audio.audima.co/iframe-later-aside-audima.html?skin=aside&statistic=true" style="" class="checked">
                            </iframe>
                        </div>`;
                    
        document.body.insertAdjacentHTML("afterbegin", AUDIMA);
    }

    /***
     * @method
     */
    pickDefaultFontSizeValues(){     
        if(this.checkButtonStatusFontSize === true){    
            this.checkButtonStatusFontSize = false;
            this.elementsParameters.forEach(elements => {   
                elements.setAttribute("fontDefault", window.getComputedStyle(elements).fontSize);      
            });
        }          
    }
    
    /***
     * @method
     */
    changeFontSizeUpper(){
        if(this.fontSizeButton === true && (this.rangeFontSize < this.valueMaximumRange)){
            this.rangeFontSize += this.baseCalcFontAdjutment;
            this.elementsParameters.forEach((elements) => {
                let currentFontSizeValuesArray = elements.getAttribute('fontDefault');     
                this.fontSizeValuesDefault = Number(currentFontSizeValuesArray.replace('px', ''));
                elements.style.fontSize = `${this.fontSizeValuesDefault + this.rangeFontSize}px`;    
            });
        }   
    }   

    /***
     * @method
     */
    changeFontSizeLower(){ 
        if(this.fontSizeButton === true && (this.rangeFontSize > this.valueMinimumRange)){   
            this.rangeFontSize -= this.baseCalcFontAdjutment;
            this.elementsParameters.forEach((elements) => {
                let currentFontSizeValuesArray = elements.getAttribute('fontDefault');
                this.fontSizeValuesDefault = Number(currentFontSizeValuesArray.replace('px', ''));
                elements.style.fontSize = `${this.fontSizeValuesDefault + this.rangeFontSize}px`;
            }); 
        }        
    }

    /**
     * @method
     */
    resetFontSize(){
        this.elementsParameters.forEach((elements) => {
            let currentFontSizeValuesArray = elements.getAttribute('fontDefault');     
            this.fontSizeValuesDefault = Number(currentFontSizeValuesArray.replace('px', ''));
            elements.style.fontSize = `${this.fontSizeValuesDefault}px`;    
        });

        this.rangeBarFontSize = 10;
        this.rangeBarFontSizeOpacity = 10;
        this.fontSizeButton = false;
    }

    /***
     * @method
     */
    pickDefaultLineHeightValues(){    
        if(this.checkButtonStatusLineHeight === true){  
            this.checkButtonStatusLineHeight = false;
            this.elementsParameters.forEach(elements => { 
                elements.style.lineHeight = "1.2";  
                elements.setAttribute("lineDefault", window.getComputedStyle(elements).lineHeight);      
            });         
        }                    
    }
    
     /***
     * @method
     */
    changeSpacingLineUpper(){
        if(this.spacingLineTextButton === true && (this.rangeLineHeight < this.valueMaximumRange)){
            this.rangeLineHeight += this.baseCalcFontAdjutment;
            this.elementsParameters.forEach((elements) => {
                let currentLineHeightArray = elements.getAttribute("lineDefault");
                this.lineHeightValuesDefault = Number(currentLineHeightArray.replace('px', ''));
                elements.style.lineHeight = `${this.lineHeightValuesDefault + this.rangeLineHeight}px`  
            });
        }          
    }

    /***
     * @method
     */
    changeSpacingLineLower(){
        if(this.spacingLineTextButton === true && (this.rangeLineHeight > this.valueMinimumRange)){
            this.rangeLineHeight -= this.baseCalcFontAdjutment;
            this.elementsParameters.forEach((elements) => {
                let currentLineHeightArray = elements.getAttribute("lineDefault");
                this.lineHeightValuesDefault = Number(currentLineHeightArray.replace('px', ''));
                elements.style.lineHeight = `${this.lineHeightValuesDefault + this.rangeLineHeight}px`
            });
        }          
    }

    /**
     * @method
     */
    resetChangeSpacingLine(){
        this.elementsParameters.forEach((elements) => {
            elements.style.lineHeight = `1.2`;
        });

        this.rangeBarLineHeight = 10;
        this.rangeBarLineHeightOpacity = 10;
        this.spacingLineTextButton = false; 
    }

    /***
    * @method
    */
    pickDefaultWordSpacingValues(){   
        if(this.checkButtonStatusWordSpacing === true){
            this.checkButtonStatusWordSpacing = false;
            this.elementsParameters.forEach(elements => {  
                elements.setAttribute("wordSpacingDefault", window.getComputedStyle(elements).wordSpacing);      
            });         
        }              
    }
    
      /***
     * @method
     */
      changeWordSpacingUpper(){ 
        if(this.wordSpaceButton === true && (this.rangeWordSpacing < this.valueMaximumRange)){
            this.rangeWordSpacing += this.baseCalcFontAdjutment;
            this.elementsParameters.forEach((elements) => {
                let currentWordSpacingArray = elements.getAttribute("wordSpacingDefault");
                this.wordSpacingValuesDefault = Number(currentWordSpacingArray.replace('px', ''));
                elements.style.wordSpacing = `${this.wordSpacingValuesDefault + this.rangeWordSpacing}px`;
            });
        }          
    }

    /***
     * @method
     */
    changeWordSpacingLower(){      
          if(this.wordSpaceButton === true && (this.rangeWordSpacing > this.valueMinimumRange)){
            this.rangeWordSpacing -= this.baseCalcFontAdjutment;
              this.elementsParameters.forEach((elements) => {
                let currentWordSpacingArray = elements.getAttribute("wordSpacingDefault");
                this.wordSpacingValuesDefault = Number(currentWordSpacingArray.replace('px', ''));
                elements.style.wordSpacing = `${this.wordSpacingValuesDefault + this.rangeWordSpacing}px`;
            });
          }          
      }

    /**
     * @method
     */
    resetChangeWordSpacing(){
        this.elementsParameters.forEach((elements) => {
            let currentWordSpacingArray = elements.getAttribute("wordSpacingDefault");
            this.wordSpacingValuesDefault = Number(currentWordSpacingArray.replace('px', ''));
            elements.style.wordSpacing = `${this.wordSpacingValuesDefault}px`;
        });

        this.rangeBarWordSpacin = 10;
        this.rangeBarWordSpacinOpacity = 10;
        this.wordSpaceButton = false; 
    }

    /**
     * @method
     */
   
        rangeExpansionUpper(){  
            if(this.fontSizeButton === true){                                                                       
                if(this.rangeBarFontSize < 100 && this.rangeBarFontSizeOpacity < 100){
                    this.rangeBarFontSize += 10;
                    this.rangeBarFontSizeOpacity += 10;
                    this.rangeBarTextAdjustment = this.rangeBarFontSize;
                    this.rangeBarTextAdjustmentOpacity = this.rangeBarFontSizeOpacity;
                    this.requestUpdate();
                }

            } else if(this.spacingLineTextButton === true){
                if(this.rangeBarLineHeight < 100 && this.rangeBarLineHeightOpacity < 100){
                    this.rangeBarLineHeight += 10;
                    this.rangeBarLineHeightOpacity += 10;
                    this.rangeBarTextAdjustment = this.rangeBarLineHeight;
                    this.rangeBarTextAdjustmentOpacity = this.rangeBarLineHeightOpacity;
                    this.requestUpdate();
                }
            } else if(this.wordSpaceButton === true){
                if(this.rangeBarWordSpacin < 100 && this.rangeBarWordSpacinOpacity < 100){
                    this.rangeBarWordSpacin += 10;
                    this.rangeBarWordSpacinOpacity += 10;
                    this.rangeBarTextAdjustment = this.rangeBarWordSpacin;
                    this.rangeBarTextAdjustmentOpacity = this.rangeBarWordSpacinOpacity;
                    this.requestUpdate();
                }
            }
            this.requestUpdate();
          }
    
        /**
         * @method
         */
          rangeExpansionLower(){   
            if(this.fontSizeButton === true){                                                                      
                if(this.rangeBarFontSize > 10 && this.rangeBarFontSizeOpacity > 12){
                    this.rangeBarFontSize -= 10;
                    this.rangeBarFontSizeOpacity -= 10;
                    this.rangeBarTextAdjustment = this.rangeBarFontSize;
                    this.rangeBarTextAdjustmentOpacity = this.rangeBarFontSizeOpacity
                }
            }else if(this.spacingLineTextButton === true){
                if(this.rangeBarLineHeight > 10 && this.rangeBarLineHeightOpacity > 12){
                    this.rangeBarLineHeight -= 10;
                    this.rangeBarLineHeightOpacity -= 10;
                    this.rangeBarTextAdjustment = this.rangeBarLineHeight;
                    this.rangeBarTextAdjustmentOpacity = this.rangeBarLineHeightOpacity;
                    this.requestUpdate();
                }
            } else if(this.wordSpaceButton === true){
                if(this.rangeBarWordSpacin > 10 && this.rangeBarWordSpacinOpacity > 12){
                    this.rangeBarWordSpacin -= 10;
                    this.rangeBarWordSpacinOpacity -= 10;
                    this.rangeBarTextAdjustment = this.rangeBarWordSpacin;
                    this.rangeBarTextAdjustmentOpacity = this.rangeBarWordSpacinOpacity;
                    this.requestUpdate();
                }
            }
            this.requestUpdate();
          }

    /**
     * @method
     */
    resetAllChangeFont(){
        this.pickDefaultFontSizeValues();
        this.resetFontSize();
        this.pickDefaultLineHeightValues();
        this.resetChangeSpacingLine();
        this.pickDefaultWordSpacingValues();
        this.resetChangeWordSpacing();  
    }
      

    /***
     * @method
     */
    stateCursorWhite(){
        this.myCursorWhite = !this.myCursorWhite;

        this.requestUpdate();
    }

    /***
     * @method
     */
    stateCursorBlack(){
        this.myCursorBlack = !this.myCursorBlack;

        this.requestUpdate();
    }

    settingCursorCustom(){
        if(this.myCursorWhite === true){
            this.changingMyWhiteCursor();
        }else if(this.myCursorBlack === true){
            this.changingMyBlackCursor();
        }else{
            this.resetCursor();
        }
    }

    /***
     * @method
     */
    changingMyWhiteCursor(){
        document.documentElement.style.cursor = `url(${cursorWhite}), auto`;  
        this.bodyCursorPointerWhite();
    }

    /***
     * @method
     */
    changingMyBlackCursor(){
        document.documentElement.style.cursor = `url(${cursosBlack}), auto`;
        this.bodyCursorPointerBlack();
    }

    /***
     * @method
     */
    bodyCursorPointerWhite(){
        this.bodyParameters.querySelectorAll('*').forEach((el) => {
            if(getComputedStyle(el).cursor === 'pointer'){
                el.style.cursor = `url(${cursorPointerWhite}), auto`;         
            }
        });
    }

    /***
     * @method
     */
    bodyCursorPointerBlack(){
        this.bodyParameters.querySelectorAll('*').forEach((el) => {
            if(getComputedStyle(el).cursor === 'pointer'){
                el.style.cursor = `url(${cursorPointerBlack}), auto`; 
            }
        })
    }

    /**
     * @method
     */
    resetCursor(){
        this.myCursorWhite = false;
        this.myCursorBlack = false;
        document.documentElement.style.cursor = '';

        this.bodyParameters.querySelectorAll('*').forEach((el) => {
            if(getComputedStyle(el).cursor !== 'pointer'){
                el.style.cursor = ""; 
            }
        })

        this.requestUpdate();
    }

    /***
     * @method
     */
    stateArticle(){
        this.myArticleState = !this.myArticleState;

        this.requestUpdate();
    }

    /***
     * @method
     */
    article(){
        if(this.myArticleState === true || this.myNewWindow.closed === true){
            this.createNewWindow(); 
        }else{    
            this.myNewWindow.close(); 
        }

        this.requestUpdate();
    }

    /**
     * @method
     */
    createNewWindow(){
        this.myNewWindow = window.open(`${window.location.href}`, "_blank", `width=1200,height=400,left=-1000,top=-1000,location=no,menubar=no,titlebar=no`);
        
        this.myNewWindow.onload = () => {
            let myNewWindowBody = this.myNewWindow.document.querySelector("body");
            myNewWindowBody.insertAdjacentHTML("beforebegin","<ecv-modal-header-body></ecv-modal-header-body>");

            let myAccessibillity = this.myNewWindow.document.querySelector("ecv-accessibility");
            myAccessibillity.style.display = "none";
        }

        this.requestUpdate();
    }

    /**
     * @method
     */
    resetNewWindow(){
        if(this.myNewWindow !== ''){
            this.myNewWindow.close();
        }
    }

   /**
    * @method
    */
   stateBackgroundColorBody(){
        if(this.stateTrack === true || this.myStateSymptoms === true){
            this.changeStateButtons();
            this.resetAccessibility();
        }

        if(this.headerAllBody === true || this.contentColorBody === true){
            this.headerAllBody = false;
            this.contentColorBody = false;
        }

        this.backgroundBody = !this.backgroundBody;
        this.requestUpdate();
   }

   /***
    * @method
    */
   stateHeaderColorBody(){
        if(this.stateTrack === true || this.myStateSymptoms === true){
            this.changeStateButtons();
            this.resetAccessibility();
        }

        if(this.backgroundBody === true || this.contentColorBody === true){
            this.backgroundBody = false;
            this.contentColorBody = false;
        }

        this.headerAllBody = !this.headerAllBody;

        this.requestUpdate();
   }

   /**
    * @method
    */
   stateContentColorBody(){
        if(this.stateTrack === true || this.myStateSymptoms === true){
            this.changeStateButtons();
            this.resetAccessibility();
        }

        if(this.headerAllBody === true || this.backgroundBody === true){
            this.backgroundBody = false;
            this.headerAllBody = false;
        }

        this.contentColorBody = !this.contentColorBody;

        this.requestUpdate();
   }

    /**
     * @method
     */
    colorBodyAllDefault(){
        this.colorDefultBody = getComputedStyle(this.myAllHtml).backgroundColor;

        this.myAllBodyHeader.forEach((header) => {
            this.colorDefaultHeader.push(getComputedStyle(header).color);
        });

        this.myAllBodyContent.forEach((content) => {
            this.colorDefaultContent.push(getComputedStyle(content).color);
        });
    }

    /**
    * @method
    */
   resetAllStateButtonColorInputColorful(){
        this.backgroundBody = false;
        this.headerAllBody = false;
        this.contentColorBody = false;

        this.requestUpdate();
    }

    /**
     * @method
     */
    resetAllColorHTML(){
        this.myAllHtml.style.backgroundColor = this.colorDefultBody;
        
        this.myAllBodyHeader.forEach((header, indice) => {
            header.style.color = this.colorDefaultHeader[indice];
        });

        this.myAllBodyContent.forEach((content, indice) => {
            content.style.color = this.colorDefaultContent[indice];
        });

        this.resetAllStateButtonColorInputColorful();
        this.myInputColorful.resetInputRange();
    }

    /**
     * @method
     */
    stateManageSearch(){
        this.myStateManage = !this.myStateManage;

        this.requestUpdate();
    }

    /**
     * @method
     */
    manageSearch(){
        if(this.myStateManage === true){
            this.showMyAriaLabelManage();
        }else{
            this.hiddenMyAriaLabelManage();
        }
        
        this.requestUpdate();
    }

    /**
     * @method
     */
    showMyAriaLabelManage(){
        this.elementsParameters.forEach((item) => {
            item.addEventListener('mouseover', () => {
                item.classList.add("myAriaLabel");
                item.ariaLabel=`${item.innerText}`;
            })
        });   
    }

    /**
     * @method
     */
    hiddenMyAriaLabelManage(){
        this.elementsParameters.forEach((item) => {
            item.addEventListener('mouseover', () => {
                item.classList.remove("myAriaLabel");
                item.removeAttribute("aria-label");
            });
        }); 
    }

    /**
     * @method
     */
    resetManageSearch(){
        this.myStateManage = false;
        this.manageSearch();
    }

    /**
     * @method
     */
    createScriptLibras(){
        let script = document.createElement("script");
        script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
        script.async = true;
        
        script.addEventListener("load", () => {
           new window.VLibras.Widget('https://vlibras.gov.br/app');
        })
        
        document.head.appendChild(script);
    }

    /**
     * @method
     */
    createBodyApiLibras(){
        const libra = `<div vw class="enabled">
                        <div vw-access-button class="active"></div>
                            <div vw-plugin-wrapper>
                        <div class="vw-plugin-top-wrapper"></div>
                        </div>
                    </div>`;

        document.body.insertAdjacentHTML("afterbegin", libra);
    }

    /**
     * @method
     */
    vLibras(){
        this.vLibra.style.display = "block";
        this.activeButtonLibra.click();

        this.requestUpdate();
    }

    /**
     * @method
     */
    resetAccessibility(){
        this.resetCursor();
        this.resetAllColorHTML();
        this.resetAllStateButtonColorInputColorful();
        this.resetMonochromeMode();
        this.resetColorBlindnessMode();
        this.resetNewWindow();
        this.resetManageSearch();
        this.resetHighlightLinks();
        this.myStateSymptoms = false;
        this.resetAllChangeFont();
    }

    /**
     * @method(this.openAndCloseModal 
     */
    changeStateButtons(){
        this.myStateSymptoms = false; 
        this.stateTrack = false;
        this.activeBlind = false; 
        this.myStateElderly = false;
        this.openAndCloseModal = false; 
        this.highlightLinksButton = false;
        this.fontSizeButton = false;
        this.myStateManage = false;
    }

    /**
     * @method(this.openAndCloseModal 
     */
    resetAllAccessibility(){
        this.myStateSymptoms = false; 
        this.stateTrack = false;
        this.activeBlind = false; 
        this.myStateElderly = false;
        this.openAndCloseModal = false; 
        this.colapsedModalAdjustment();
        this.resetAccessibility();
    }
}

customElements.define('ecv-accessibility', ECVAccessibility);