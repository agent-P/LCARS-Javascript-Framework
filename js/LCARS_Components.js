const svgNS = "http://www.w3.org/2000/svg";

/**
 *  ES_XXX - LCARS element styles
 */
const ES_SHAPE      = 0x0000000F;   // Mask for ES_SHAPE_XXX styles
const ES_LABEL      = 0x000000F0;   // Mask for ES_LABEL_XXX styles
//const ES_STYLE      = 0x0000FC00;   // Mask for color style
const ES_COLOR      = 0x0000FF00;   // Mask for EC_XXX styles
const ES_FONT       = 0x000F0000;   // Mask for EF_XXX styles
const ES_BEHAVIOR   = 0x0F000000;   // Mask for EB_XXX styles
const ES_CLASS      = 0xF0000000;   // Mask for class specific styles
const ES_SELECTED   = 0x00000000;   // Element selected
const ES_DISABLED   = 0x01000000;   // Element disabled
const ES_SELDISED   = 0x00000000;   // Element selected and disabled
const ES_STATIC     = 0x00100000;   // Element does not accept user input
const ES_BLINKING   = 0x00200000;   // Element blinks
const ES_MODAL      = 0x00400000;   // Element is always opaque
const ES_SILENT     = 0x00800000;   // Element does not play a sound
const ES_NONE       = 0x00000000;   // Element does not have a style


/**
 *  ES_SHAPE_XXX - LCARS element shape orientation
 */
const ES_SHAPE_NW   = 0x00000000;   // Shape oriented to the north-west
const ES_SHAPE_SW   = 0x00000001;   // Shape oriented to the south-west
const ES_SHAPE_NE   = 0x00000002;   // Shape oriented to the north-east
const ES_SHAPE_SE   = 0x00000004;   // Shape oriented to the south-east
const ES_OUTLINE    = 0x00000008;   // Outline

/**
 *  ES_LABEL_XXX - LCARS element label position
 */
const ES_LABEL_SE   = 0x00000010;   // Label in the south-east - the default for LCARS components
const ES_LABEL_S    = 0x00000020;   // Label in the south
const ES_LABEL_SW   = 0x00000030;   // Label in the south-west
const ES_LABEL_W    = 0x00000040;   // Label in the west
const ES_LABEL_NW   = 0x00000050;   // Label in the north-west
const ES_LABEL_N    = 0x00000060;   // Label in the north
const ES_LABEL_NE   = 0x00000070;   // Label in the north-east
const ES_LABEL_E    = 0x00000080;   // Label in the east
const ES_LABEL_C    = 0x00000090;   // Label in the center

/**
 *  ES_RECT_XXX - LCARS Rectangle/Button element styles
 */
const ES_RECT_RND   = 0x30000000;   // Rounded rectangle shape
const ES_RECT_RND_E = 0x10000000;   // Rounded rectangle shape in the east
const ES_RECT_RND_W = 0x20000000;   // Rounded rectangle shape in the west

/**
 *  EC_XXX - Colors by Name
 */
const EC_WHITE      = 0x00000000;   //
const EC_L_BLUE     = 0x00000400;   //
const EC_M_BLUE     = 0x00000800;   //
const EC_BLUE       = 0x00000C00;   //
const EC_D_BLUE     = 0x00001000;   //
const EC_YELLOW     = 0x00001400;   //
const EC_ORANGE     = 0x00001800;
const EC_RED        = 0x00001C00;

/**
 *  EF_XXX - Fonts
 */
const EF_NORMAL     = 0x00000000;   // The normal LCARS font
const EF_TITLE      = 0x00010000;   // The title font
const EF_SUBTITLE   = 0x00020000;   // The subtitle font
const EF_BUTTON     = 0x00030000;   // The default button text font
const EF_BODY       = 0x00040000;   // The default body text font
const EF_TINY       = 0x00050000;   // A tiny font

const FONT_TITLE_SIZE    = 60;
const FONT_SUBTITLE_SIZE = 40;
const FONT_BUTTON_SIZE   = 25;
const FONT_BODY_SIZE     = 20;
const FONT_TINY_SIZE     = 10;

//const LCARS_FONT = "Swiss911 UCm BT"
const LCARS_FONT = "Arial Narrow"
//const LCARS_FONT = "Helvetica Neue"
const LCARS_FONT_MOBILE = "Avenir Next Condensed Medium"

/**
 * Keypad Class Styles
 */
const EKP_AUX_KEYS  = 0x40000000;

/**
 * Key pad constants
 */
const KP_BUTTON_X_OFFSET = 175;
const KP_BUTTON_Y_OFFSET = 100;
const KP_BUTTON_X_SPACE = 25;
const KP_BUTTON_Y_SPACE = 40;

const TEXT_Y_INSET = 10;
const TEXT_X_INSET = 20;

const LCARS_BTN_HEIGHT    = 60;
const LCARS_BTN_WIDTH     = 150;
const LCARS_BTN_SPACING   = 5;
const LCARS_CORNER_HEIGHT = 92;

const SHAPE_SUFFIX = "_shape";
const TEXT_SUFFIX = "_text";
const AUX_TEXT_SUFFIX = "_aux_text";

const DAYS = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const MONTHS = [
    "",                               /** MONTHS[1] = "January" */
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function LCARS() {
    
}

LCARS.getColor = function(properties) {
    var color = "";
    
    switch(properties & ES_COLOR) {
        case EC_WHITE:
            return "#CCDDFF";
        case EC_L_BLUE:
            return "#5599FF";
        case EC_M_BLUE:
            return "#3366FF";
        case EC_BLUE:
            return "#0011EE";
        case EC_D_BLUE:
            return "#000088";
        case EC_YELLOW:
            return "#CCA300";
        case EC_ORANGE:
            return "#CC6600";
        case EC_RED:
            return "#A30000";
        default:
            break;
    }
    
    return color;
}

LCARS.setFont = function(font) {
    this.font = font;
}

LCARS.getFont = function() {
    return this.font;
}


LCARSComponent = function(id, label, x, y, properties) {
    if(id != undefined) { /** Prevent execution when used for inheritence and not instantiation. */
        this.composite = false;
        this.id = id;
        this.label = label;
        this.x = x;
        this.y = y;
        this.properties = properties;
        this.static = properties & ES_STATIC;
        this.color = this.getColor();
        this.overColor = this.getOverColor();
        this.downColor = this.getDownColor();
        this.textColor = this.getTextColor();
        this.fontSize = this.getLCARSFontSize();
        
        this.element = document.createElementNS(svgNS, "g");
        this.element.setAttribute("id", this.id);
        this.element.setAttribute("x", 0);
        this.element.setAttribute("y", 0);
        this.element.setAttribute("transform", 'translate(' + x + ',' +  y +')');
        
    }
}

LCARSComponent.prototype.getElement = function() {
    return this.element;
}

LCARSComponent.prototype.getShapeElement = function() {
    return this.shapeElement;
}

LCARSComponent.prototype.getTextElement = function() {
    return this.textElement;
}

LCARSComponent.prototype.addEventListener = function(event, callback) {
    this.element.addEventListener(event, callback, false);
}

LCARSComponent.prototype.getColor = function() {
    return LCARS.getColor(this.properties);
}

LCARSComponent.prototype.getTextColor = function() {
    var color = "";
    
    switch(this.properties & ES_COLOR) {
        case EC_BLUE:
        case EC_D_BLUE:
        case EC_RED:
            return "#CCDDFF";
        case EC_WHITE:
        case EC_YELLOW:
        case EC_ORANGE:
        case EC_L_BLUE:
        case EC_M_BLUE:
        default:
            return "#000000";
    }
    
    return color;
}

LCARSComponent.prototype.getOverColor = function() {
    var color = "";
    
    switch(this.properties & ES_COLOR) {
        case EC_WHITE:
            return "#FFFFFF";
        case EC_L_BLUE:
            return "#77ADFF";
        case EC_M_BLUE:
            return "#5C85FF";
        case EC_BLUE:
            return "#3341F1";
        case EC_D_BLUE:
            return "#3333A0";
        case EC_YELLOW:
            return "#D6B533";
        case EC_ORANGE:
            return "#D68533";
        case EC_RED:
            return "#B53333";
        default:
            break;
    }
    
    return color;
}

LCARSComponent.prototype.getDownColor = function() {
    var color = "";
    
    switch(this.properties & ES_COLOR) {
        case EC_WHITE:
            return "#B8C7E6";
        case EC_L_BLUE:
            return "#447ACC";
        case EC_M_BLUE:
            return "#2952CC";
        case EC_BLUE:
            return "#000EBE";
        case EC_D_BLUE:
            return "#00006D";
        case EC_YELLOW:
            return "#A38200";
        case EC_ORANGE:
            return "#A35200";
        case EC_RED:
            return "#820000";
        default:
            break;
    }
    
    return color;
}

LCARSComponent.prototype.setComponentDynamics = function() {
    if(this.static != ES_STATIC) {
        this.shapeElement.setAttribute("onmouseover", "evt.target.setAttribute('fill','" + this.overColor + "')");
        this.shapeElement.setAttribute("onmousedown", "evt.target.setAttribute('fill','" + this.downColor + "')");
        this.shapeElement.setAttribute("onmouseup", "evt.target.setAttribute('fill','" + this.color + "')");
        this.shapeElement.setAttribute("onmouseout", "evt.target.setAttribute('fill','" + this.color + "')");
        //this.shapeElement.setAttribute("onclick", "alert('click!')");
    }
}

LCARSComponent.prototype.getLCARSFontSize = function() {
    switch(this.properties & ES_FONT) {
        case EF_TITLE:
            return FONT_TITLE_SIZE;
        case EF_SUBTITLE:
            return FONT_SUBTITLE_SIZE;
        case EF_BUTTON:
            return FONT_BUTTON_SIZE;
        case EF_TINY:
            return FONT_TINY_SIZE
        case EF_BODY:
        default:
            return FONT_BODY_SIZE;
    }
}

LCARSComponent.prototype.getTextX = function() {
    var x = 0;
    
    switch(this.properties & ES_LABEL) {
        case ES_LABEL_C:
        case ES_LABEL_S:
        case ES_LABEL_N:
            x = this.width/2;
            break;
        case ES_LABEL_SW:
        case ES_LABEL_W:
        case ES_LABEL_NW:
            x = TEXT_X_INSET;
            break;
        case ES_LABEL_NE:
        case ES_LABEL_E:
        case ES_LABEL_SE:
        default:
            x = this.width - TEXT_X_INSET;
            break;
    }
    
    return x;
}

LCARSComponent.prototype.getTextY = function() {
    var y = 0;
    
    switch(this.properties & ES_LABEL) {
        case ES_LABEL_C:
        case ES_LABEL_W:
        case ES_LABEL_E:
            y = this.height/2 + FONT_BUTTON_SIZE/2;
            break;
        case ES_LABEL_NW:
        case ES_LABEL_N:
        case ES_LABEL_NE:
            y = FONT_BUTTON_SIZE;
            break;
        case ES_LABEL_S:
        case ES_LABEL_SW:
        case ES_LABEL_SE:
        default:
            y = this.height - TEXT_Y_INSET;
            break;
    }
    
    return y;
}

LCARSComponent.prototype.getTextAnchor = function() {
    var textAnchor = "";
    
    switch(this.properties & ES_LABEL) {
        case ES_LABEL_C:
        case ES_LABEL_S:
        case ES_LABEL_N:
            textAnchor = "middle";
            break;
        case ES_LABEL_SW:
        case ES_LABEL_W:
        case ES_LABEL_NW:
            textAnchor = "start";
            break;
        case ES_LABEL_NE:
        case ES_LABEL_E:
        case ES_LABEL_SE:
        default:
            textAnchor = "end";
            break;
    }
    
    return textAnchor;
}


LCARSComponent.prototype.drawShape = function() {
    var rectString = "M0,0";
    
    var westEndString;
    var eastEndString;
    var northString = " l";
    var southString = " l-";
    
    var hLength;
    
    var rectType = this.properties & ES_RECT_RND;
    
    /** Create West end string. */
    switch(rectType) {
        case ES_RECT_RND:
        case ES_RECT_RND_W:
            westEndString = " m" + (this.height/2) + "," + this.height +
            " c-" + (this.height*.65) + ",0 -" + (this.height*.65) + ",-" + this.height + " 0,-" + this.height;
            break;
        case ES_RECT_RND_E:
        default:
            westEndString = " m0," + this.height + " l0,-" + this.height;
            break;
    }
    
    /** Create the North and South edge strings. */
    switch(rectType) {
        case ES_RECT_RND:
            hLength = this.width - this.height;
            break;
        case ES_RECT_RND_E:
        case ES_RECT_RND_W:
            hLength = this.width - (this.height/2);
            break;
            break
        default:
            hLength = this.width;
            break;
    }
    northString += hLength + ",0";
    southString += hLength + ",0";
    
    /** Create the East end string */
    switch(rectType) {
        case ES_RECT_RND:
        case ES_RECT_RND_E:
            eastEndString = " c" + (this.height*.65) + ",0 " + (this.height*.65) + "," + this.height + " 0," + this.height;
            break;
        case ES_RECT_RND_W:
        default:
            eastEndString = " l0," + this.height;
            break;
    }
    
    /** Create the rectangle path string. */
    rectString += westEndString + northString + eastEndString + southString;
    
    /** Create the DOM object, and set its attributes. */
    this.shapeElement = document.createElementNS(svgNS, "path");
    this.shapeElement.setAttribute("d", rectString);
    this.setShapeAttributes();
    
    this.element.appendChild(this.shapeElement);
    
    /** Set the component's dynamics. */
    this.setComponentDynamics();    
}


LCARSComponent.prototype.setShapeAttributes = function() {
    this.shapeElement.setAttribute("id", this.id + SHAPE_SUFFIX);
    this.shapeElement.setAttribute("fill", this.color);
    if(this.properties & ES_DISABLED) {
        this.shapeElement.setAttribute("stroke", this.color);
        this.shapeElement.setAttribute("stroke-width", '2');
        this.shapeElement.setAttribute("fill-opacity", '0.1');
    }
    else {
        this.shapeElement.setAttribute("fill-opacity", '1.0');
    }
}


LCARSComponent.prototype.setEnabled = function(enabled) {
    if(enabled) {
        this.element.setAttribute("pointer-events", "all");
        this.shapeElement.setAttribute("fill-opacity", '1.0');
        this.shapeElement.setAttribute("stroke-width", '0');
        this.textElement.setAttribute("fill", this.textColor);
    }
    else {
        this.element.setAttribute("pointer-events", "none");
        this.shapeElement.setAttribute("stroke", this.color);
        this.shapeElement.setAttribute("stroke-width", '2');
        this.shapeElement.setAttribute("fill-opacity", '0.1');
        this.textElement.setAttribute("fill", '#585858');
    }
}


LCARSComponent.prototype.drawText = function() {
    this.textElement = document.createElementNS(svgNS, "text");
    this.setTextAttributes();
    this.setText(this.label);
    
    this.element.appendChild(this.textElement);
}


LCARSComponent.prototype.setTextAttributes = function() {
    this.textElement.setAttribute("id", this.id + TEXT_SUFFIX);
    this.textElement.setAttribute("x", this.getTextX());
    this.textElement.setAttribute("y", this.getTextY());
    this.textElement.setAttribute("text-anchor", this.getTextAnchor());
    if(this.properties & ES_DISABLED) {
        this.textElement.setAttribute("fill", '#585858');
    }
    else {
        this.textElement.setAttribute("fill", this.textColor);
    }
    this.textElement.setAttribute("font-family", LCARS.getFont());
    this.textElement.setAttribute("font-size", this.fontSize);
    this.textElement.setAttribute("pointer-events", "none");
}


LCARSComponent.prototype.setText = function(textString) {
    this.textElement.textContent = textString;
}


LCARSComponent.prototype.setVisible = function(visible) {
    if(visible) {
        this.element.setAttributeNS(null, 'display', 'inline');
    }
    else {
        this.element.setAttributeNS(null, 'display', 'none');
    }
}



LCARSCorner.prototype = new LCARSComponent();
function LCARSCorner(name, label, x, y, width, height, properties) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.width = width;
    this.height = LCARS_CORNER_HEIGHT + (((height-1)<0)?0:(height-1))*LCARS_BTN_HEIGHT + (((height-1)<0)?0:(height-1))*LCARS_BTN_SPACING;
    this.shape = properties & ES_SHAPE;
    
    if((this.properties & ES_FONT) == EF_NORMAL) {
        this.fontSize = FONT_BUTTON_SIZE; // the default font for corner components
    }
    this.drawShape();
    this.drawText();
    
}

LCARSCorner.prototype.drawShape = function() {
    var pathString = "M0,0";
    var armStringW = (this.width-185) + ",0 l0,30 l-" + (this.width-185);
    var armStringE = (this.width-185) + ",0 l0,-30 l" + (this.width-185);
    var sideStringT = " l0," + (this.height - LCARS_CORNER_HEIGHT) + " l-150,0 l0,-" + (this.height - LCARS_CORNER_HEIGHT);
    var sideStringB = " l0,-" + (this.height - LCARS_CORNER_HEIGHT) + " l150,0 l0," + (this.height - LCARS_CORNER_HEIGHT);
    
    if(this.shape == ES_SHAPE_NW) {
        pathString += " m150," + LCARS_CORNER_HEIGHT +
        sideStringT + " l0,-17 q0,-75 75,-75 l110,0 l" +
        armStringW +
        ",0 q-35,0 -35,35 l0,27";
    }
    else if(this.shape == ES_SHAPE_SW) {
        pathString += " m0," + (this.height - LCARS_CORNER_HEIGHT) +
        sideStringB + "l0,27 q0,35 35,35 l" +
        armStringW +
        ",0 l-110,0 q-75,0 -75,-75 l0,-17";
    }
    else if(this.shape == ES_SHAPE_SE) {
        pathString += " m" + (this.width-150) + "," + (this.height - LCARS_CORNER_HEIGHT) +
        sideStringB + " l0,17 q0,75 -75,75 l-110,0 l-" +
        armStringE + ",0 q35,0 35,-35 l0,-27";
    }
    else if(this.shape == ES_SHAPE_NE) {
        pathString += " m" + (this.width-185) + ",0 l110,0 q75,0 75,75 l0,17" +
        sideStringT + " l0,-27 q0,-35 -35,-35 l-" +
        armStringE + ",0";
    }
    
    /** Create the DOM object. */
    this.shapeElement = document.createElementNS(svgNS, "path");
    //this.shapeElement.setAttribute("id", this.id + SHAPE_SUFFIX);
    this.shapeElement.setAttribute("d", pathString);
    //this.shapeElement.setAttribute("fill", this.color);
    this.setShapeAttributes();
    
    this.element.appendChild(this.shapeElement);
    
    /** Set the component's dynamics. */
    this.setComponentDynamics();
}


LCARSCorner.prototype.getTextX = function() {
    var x;
    
    switch(this.properties & ES_SHAPE) {
        case ES_SHAPE_SE:
            x = this.width - 140;
            break;
        case ES_SHAPE_SW:
            x = 140;
            break;
        case ES_SHAPE_NW:
            x = 140;
            break;
        case ES_SHAPE_NE:
            x = this.width - 140;
            break;
    }
    
    return x;
}

LCARSCorner.prototype.getTextY = function() {
    var y;
    
    switch(this.properties & ES_SHAPE) {
        case ES_SHAPE_SE:
            y = this.fontSize;
            break;
        case ES_SHAPE_SW:
            y = this.fontSize;
            break;
        case ES_SHAPE_NW:
            y = this.height - 10;
            break;
        case ES_SHAPE_NE:
            y = this.height - 10;
            break;
    }
    
    return y;
}

LCARSCorner.prototype.getTextAnchor = function() {
    switch(this.properties & ES_SHAPE) {
        case ES_SHAPE_SE:
            this.textAnchor = "start";
            break;
        case ES_SHAPE_SW:
            this.textAnchor = "end";
            break;
        case ES_SHAPE_NW:
            this.textAnchor = "end";
            break;
        case ES_SHAPE_NE:
            this.textAnchor = "start";
            break;
    }
    
    return this.textAnchor;
}

LCARSCorner.prototype.drawText = function() {
    
    if(this.label != "" && this.label != null) {
        this.textElement = document.createElementNS(svgNS, "text");
        this.setTextAttributes();
        this.setText(this.label);
        
        this.element.appendChild(this.textElement);
    }
}


/**
 * LCARS Rctangle component
 */
LCARSRectangle.prototype = new LCARSComponent();
function LCARSRectangle(name, label, x, y, width, height, properties) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.width = width;
    this.height = height;
    this.static = ES_STATIC;  // Rectangles are always static.
    
    this.drawShape();
    this.drawText();
}


/**
 * LCARS Button component
 */
LCARSButton.prototype = new LCARSComponent();
function LCARSButton(name, label, x, y, height, properties, auxLabel, auxLabelProperties) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.auxLabel = auxLabel;
    this.auxLabelProperties = auxLabelProperties;
    
    this.width = LCARS_BTN_WIDTH;
    
    if((properties & ES_RECT_RND) == 0) {
        this.height = height*LCARS_BTN_HEIGHT + (height-1)*LCARS_BTN_SPACING;
    }
    else {
        this.height = LCARS_BTN_HEIGHT;
    }
    
    if((this.properties & ES_FONT) == EF_NORMAL) {
        this.fontSize = FONT_BUTTON_SIZE; // the default font for button components
    }

    this.drawShape();
    this.drawText();
    
    if(this.auxLabel != "" && this.auxLabel != undefined) {
        this.drawAuxText();
    }
}


LCARSButton.prototype.setAuxText = function(textString) {
    this.auxTextElement.textContent = textString;
}


LCARSButton.prototype.drawAuxText = function() {
    this.auxTextElement = document.createElementNS(svgNS, "text");
    this.auxTextElement.setAttribute("id", this.id + AUX_TEXT_SUFFIX);
    this.auxTextElement.setAttribute("x", this.getAuxTextX());
    this.auxTextElement.setAttribute("y", this.getAuxTextY());
    this.auxTextElement.setAttribute("text-anchor", this.getAuxTextAnchor());
    if(this.properties & ES_DISABLED) {
        this.auxTextElement.setAttribute("fill", '#585858');
    }
    else {
        this.auxTextElement.setAttribute("fill", LCARS.getColor(this.auxLabelProperties & ES_COLOR));
    }
    this.auxTextElement.setAttribute("font-family", LCARS.getFont());
    this.auxTextElement.setAttribute("font-size", this.getAuxLabelFontSize());
    this.auxTextElement.setAttribute("pointer-events", "none");
    
    this.setAuxText(this.auxLabel);
    
    this.element.appendChild(this.auxTextElement);
}


LCARSButton.prototype.getAuxTextX = function() {
    var x = 0;
    
    switch(this.auxLabelProperties & ES_LABEL) {
        case ES_LABEL_C:
        case ES_LABEL_S:
        case ES_LABEL_N:
            x = this.width/2;
            break;
        case ES_LABEL_SW:
        case ES_LABEL_W:
        case ES_LABEL_NW:
            x = TEXT_X_INSET;
            break;
        case ES_LABEL_NE:
        case ES_LABEL_E:
        case ES_LABEL_SE:
        default:
            x = this.width - TEXT_X_INSET;
            break;
    }
    
    return x;
}


LCARSButton.prototype.getAuxTextY = function() {
    var y = 0;
    
    switch(this.auxLabelProperties & ES_LABEL) {
        case ES_LABEL_C:
        case ES_LABEL_W:
        case ES_LABEL_E:
            y = this.height/2 + FONT_BUTTON_SIZE/2;
            break;
        case ES_LABEL_NW:
        case ES_LABEL_N:
        case ES_LABEL_NE:
            y = FONT_BUTTON_SIZE;
            break;
        case ES_LABEL_S:
        case ES_LABEL_SW:
        case ES_LABEL_SE:
        default:
            y = this.height - TEXT_Y_INSET;
            break;
    }
    
    return y;
}


LCARSButton.prototype.getAuxTextAnchor = function() {
    var textAnchor = "";
    
    switch(this.auxLabelProperties & ES_LABEL) {
        case ES_LABEL_C:
        case ES_LABEL_S:
        case ES_LABEL_N:
            textAnchor = "middle";
            break;
        case ES_LABEL_SW:
        case ES_LABEL_W:
        case ES_LABEL_NW:
            textAnchor = "start";
            break;
        case ES_LABEL_NE:
        case ES_LABEL_E:
        case ES_LABEL_SE:
        default:
            textAnchor = "end";
            break;
    }
    
    return textAnchor;
}


LCARSButton.prototype.getAuxLabelFontSize = function() {
    switch(this.auxLabelProperties & ES_FONT) {
        case EF_TITLE:
            return FONT_TITLE_SIZE;
        case EF_SUBTITLE:
            return FONT_SUBTITLE_SIZE;
        case EF_BUTTON:
            return FONT_BUTTON_SIZE;
        case EF_TINY:
            return FONT_TINY_SIZE
        case EF_BODY:
        default:
            return FONT_BODY_SIZE;
    }
}



/**
 * LCARS Text component
 */
LCARSText.prototype = new LCARSComponent();
function LCARSText(name, label, x, y, properties) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.static = ES_STATIC;  // Text is always static.
    this.textColor = this.getColor();
    
    this.drawText();
}

LCARSText.prototype.getTextAnchor = function() {
    if((this.properties & ES_LABEL) == 0) {
        this.properties |= ES_LABEL_W;
    }
    
    return LCARSComponent.prototype.getTextAnchor.call(this);
}

LCARSText.prototype.drawShape = function() {
    return "";
}

LCARSText.prototype.getTextX = function() {
    return 0;
}

LCARSText.prototype.getTextY = function() {
    return 0;
}


/**
 * LCARS Calendar component
 */
LCARSCalendar.prototype = new LCARSComponent();
function LCARSCalendar(name, label, x, y, properties) {
    LCARSComponent.call(this, name, "", x, y, properties); /** Calendar doesn't have a label. */
    this.static = ES_STATIC;  // Text is always static.
    this.textColor = this.getColor();
    
    this.drawText();
}

LCARSCalendar.prototype.getTextAnchor = function() {
    if((this.properties & ES_LABEL) == 0) {
        this.properties |= ES_LABEL_W;
    }
    
    return LCARSComponent.prototype.getTextAnchor.call(this);
}

LCARSCalendar.prototype.drawShape = function() {
    return "";
}

LCARSCalendar.prototype.getTextX = function() {
    return 0;
}

LCARSCalendar.prototype.getTextY = function() {
    return 0;
}

LCARSCalendar.prototype.drawText = function() {
    this.textElement = document.createElementNS(svgNS, "text");
    this.textElement.setAttribute("id", this.id + TEXT_SUFFIX);
    this.textElement.setAttribute("x", this.getTextX());
    this.textElement.setAttribute("y", this.getTextY());
    this.textElement.setAttribute("text-anchor", this.getTextAnchor());
    this.textElement.setAttribute("fill", this.textColor);
    this.textElement.setAttribute("font-family", LCARS.getFont());
    this.textElement.setAttribute("font-size", this.fontSize);

    this.textSpan1 = document.createElementNS(svgNS, "tspan");
    this.textSpan1.setAttribute("id", this.id + "_textSpan");
    this.textSpan1.setAttribute("x", "0");
    this.textSpan1.setAttribute("y", "50");
    this.textSpan1.textContent = "LINE 1";

    this.textElement.appendChild(this.textSpan1);

    this.setText(this.label);

    this.element.appendChild(this.textElement);
}

//LCARSCalendar.prototype = new LCARSComponent();
//function LCARSCalendar(name, x, y, properties) {
//    LCARSComponent.call(this, name, "", x, y, properties); /** Calendar doesn't have a label. */
//    this.static = ES_STATIC;  /** Calendar is always static. */
//    this.textColor = this.getColor();
//    
//    //this.setToday();
//    
//    //this.displayMonth = this.currentMonth;
//    //this.displayYear = this.currentYear;
//    
//    this.drawText();
//}
//
//
///**
// * Set the calendar object's date to today's date.
// */
//LCARSCalendar.prototype.setToday() = function() {
//    /** Get the current date and time. */
//    this.now = new Date();
//    
//    /** Set the object's <code>today</code> attribute to the current date. */
//    this.today = now.getDate();
//    
//    /** Set the object's current month and year from the current date/time. 
//     Add 1900 to the current year to get a valid four digit year. Note: javascript
//     counts years from 1900 (a Y2K thing). */
//    this.currentMonth = now.getMonth();
//    this.currentYear  = now.getYear();
//    this.currentYear += 1900;
//}
//
//
///**
// * Returns <code>true</code> if the year is a four (4) digit year.
// *
// * @param year the year as a number
// */
//LCARSCalendar.prototype.isFourDigitYear(year) = function() {
//    /** First, check to make sure the argument is a number. If not, return <code>false</code>. */
//    if(isNaN(year)) {
//        return false;
//    }
//    /** If it is a number, check the length. If length is 4, return <code>true</code>,
//     else <code>false</code>. */
//    else if(year.length == 4) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
//
//
///**
// * Decrement the year for the displayed calendar month.
// */
//LCARSCalendar.prototype.decrementYear() = function() {
//    var year  = this.displayYear - 1;
//    if (isFourDigitYear(year)) {
//        this.displayYear = year;
//        this.drawCalendar();
//    }
//}
//
//
///**
// * Decrement the month for the displayed calendar.
// */
//LCARSCalendar.prototype.decrementMonth() = function() {
//    var month  = this.displayMonth - 1;
//    if (month < 0) {
//        month = 11;
//    }
//    this.displayMonth = month;
//    this.drawCalendar();
//}
//
//
///**
// * Increment the year for the displayed calendar month.
// */
//LCARSCalendar.prototype.incrementYear() = function() {
//    var year  = this.displayYear + 1;
//    if (isFourDigitYear(year)) {
//        this.displayYear = year;
//        this.drawCalendar();
//    }
//}
//
//
///**
// * Increment the month for the displayed calendar.
// */
//LCARSCalendar.prototype.incrementMonth() = function() {
//    var month  = this.displayMonth + 1;
//    if (month > 11) {
//        month = 0;
//    }
//    this.displayMonth = month;
//    this.drawCalendar();
//}
//
//
///**
// * Returns true if the argument specified four digit year is a leap year.
// *
// * @param year the four digit year
// * @return  true if the given year is a leap year, false, if not
// */
//LCARSCalendar.prototype.isLeapYear(year) = function() {
//    /**
//     * If the current year is evenly divisible by 4 and not by 100, return true.
//     */
//    if((year % 4 == 0) && (year % 100 != 0)) {
//        return true;
//    }
//    
//    /**
//     * If the current year is evenly divisible by 400, return true.
//     */
//    if(year % 400 == 0) {
//        return true;
//    }
//    
//    /**
//     * If none of the leap year conditions is met, method falls through,
//     * and returns false.
//     */
//    return false;
//}
//
//
///**
// * Returns the day of the week according to the Gregorian calendar, given
// * the <code>month</code>, <code>day</code>, and <code>year</code>.
// * January through December equal 1 - 12, and Sunday through Saturday equal
// * 0 - 6.
// * @param month  the month of the date
// * @param day  the day of the date
// * @param year  the year of the date
// * @return  the day of the week according to the Gregorian calendar
// */
//LCARSCalendar.prototype.dayOfWeek(month, day, year) = function() {
//    var y = year - (14 - month) / 12;
//    var x = y + y/4 - y/100 + y/400;
//    var m = month + 12 * ((14 - month) / 12) - 2;
//    var d = (day + x + (31 * m)/12) % 7;
//    return d;
//}
//
//
///**
// * Returns <code>true</code> if the day of the week integer argument is greater
// * than Sunday (0) and less than Saturday (6).
// * <ul>
// * <li>Sunday = 0</li>
// * <li>Monday = 1</li>
// * <li>Tuesday = 2</li>
// * <li>Wednesday = 3</li>
// * <li>Thursday = 4</li>
// * <li>Friday = 5</li>
// * <li>Saturday = 6</li>
// * </ul>
// *
// * @param day an integer between 1 and 5 inclusive to return <code>true</code>, else <code>false</code>
// * @return <code>true</code> if weekday (Mon - Fri), <code>false</code> if not
// */
//LCARSCalendar.prototype.isWeekday(day) = function() {
//    var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);
//    
//    if(_day > 0 && _day < 6) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
//
//
///**
// * Returns <code>true</code> if the <code>day</code> argument indicates a Sunday, an integer 0.
// *
// * @param day an integer value for the day
// * @return <code>true</code> if Sunday, <code>false</code> if not
// */
//LCARSCalendar.prototype.isSunday(day) = function() {
//    var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);
//    
//    if(_day == 0) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
//
//
///**
// * Returns <code>true</code> if the <code>day</code> argument indicates a Saturday, an integer 6.
// *
// * @param day an integer value for the day
// * @return <code>true</code> if Saturday, <code>false</code> if not
// */
//LCARSCalendar.prototype.isSaturday(day) = function() {
//    var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);
//    
//    if(_day == 6) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
//
//
///**
// * Returns <code>true</code> if the <code>day</code> argument indicates the current day.
// *
// * @param day an integer value for the day
// * @return <code>true</code> if today, <code>false</code> if not
// */
//LCARSCalendar.prototype.isToday(day) = function() {
//    if(this.displayYear == this.currentYear && this.displayMonth == this.currentMonth && day == this.currentDay) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
//
//
///**
// * Returns the number of days in the argument specified month and year.
// *
// * @param month  the integer (0 - 11) identifier of the month
// * @param year  the four digit year
// */
//LCARSCalendar.prototype.getDaysInMonth(month, year) = function() {
//    var days = 31;
//    
//    if(month == 3 || month == 5 || month == 8 || month == 10) {
//        days = 30;
//    }
//    else if(month == 1 ) {
//        if(this.isLeapYear(year)) {
//            days = 29;
//        }
//        else {
//            days = 28;
//        }
//    }
//    return days;
//}
//
//
//
//
//
///**
// * Draws the current month calendar.
// */
//LCARSCalendar.prototype.drawCalendar() = function() {
//    
//    this.drawText();
//    
//}

/**
 * LCARS TextArea component
 */
LCARSTextArea.prototype = new LCARSComponent();
function LCARSTextArea(name, label, x, y, columns, rows, properties) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.composite = true;
    this.static = ES_STATIC;  // TextAreas are always static.
    this.textColor = this.getColor();
    
    this.columns = columns;
    this.rows = rows;
    
    //this.drawText();
    this.drawShape();
}

LCARSTextArea.prototype.getTextAnchor = function() {
    if((this.properties & ES_LABEL) == 0) {
        this.properties |= ES_LABEL_W;
    }
    
    return LCARSComponent.prototype.getTextAnchor.call(this);
}

LCARSTextArea.prototype.drawShape = function() {
    
    this.divElement = document.createElement("div");
    this.divElement.style.top = this.y + "px";
    this.divElement.style.left = this.x + "px";
    this.divElement.style.position = "absolute";
    
    this.textAreaElement = document.createElement("textarea");
    this.textAreaElement.name = "post";
    this.textAreaElement.style.border = "0px solid black";
    this.textAreaElement.maxLength = "5000";
    this.textAreaElement.cols = this.columns;
    this.textAreaElement.rows = this.rows;
    this.textAreaElement.readonly = true;
    this.textAreaElement.style.backgroundColor = "black";
    this.textAreaElement.style.color = this.textColor;
    this.textAreaElement.style.fontFamily = LCARS.getFont();
    this.textAreaElement.style.fontSize = "2em";
    
    this.divElement.appendChild(this.textAreaElement); //appendChild

    return "";
}

LCARSTextArea.prototype.appendLine = function(lineOfText) {

    var total = ((this.textAreaElement.value ? this.textAreaElement.value + "\n" : "") + lineOfText).split("\n");
    
    if(total.length > this.rows) {
        total = total.slice(total.length - this.rows);
    }
    
    this.textAreaElement.value = total.join("\n");
}

LCARSTextArea.prototype.getTextX = function() {
    return 0;
}

LCARSTextArea.prototype.getTextY = function() {
    return 0;
}


/**
 * LCARS Keypad component
 */
LCARSKeypad.prototype = new LCARSComponent();
function LCARSKeypad(name, x, y, properties, auxLabelProperties) {
    LCARSComponent.call(this, name, "", x, y, properties); /** Keypads don't have labels */
    //this.composite = true;
    
    this.auxLabelProperties = auxLabelProperties;

    
//    this.drawText();
    this.drawShape();
}

LCARSKeypad.prototype.drawShape = function() {
    
    this.button_1 = new LCARSButton("1", "1", 0, 0, 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_1.element);
    
    this.button_2 = new LCARSButton("2", "2", (LCARS_BTN_WIDTH + KP_BUTTON_X_SPACE), 0, 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_2.element);
    
    this.button_3 = new LCARSButton("3", "3", (2*LCARS_BTN_WIDTH + 2*KP_BUTTON_X_SPACE), 0, 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_3.element);
    
    this.button_4 = new LCARSButton("4", "4", 0, (LCARS_BTN_HEIGHT + KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_4.element);
    
    this.button_5 = new LCARSButton("5", "5", (LCARS_BTN_WIDTH + KP_BUTTON_X_SPACE), (LCARS_BTN_HEIGHT + KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_5.element);
    
    this.button_6 = new LCARSButton("6", "6", (2*LCARS_BTN_WIDTH + 2*KP_BUTTON_X_SPACE), (LCARS_BTN_HEIGHT + KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_6.element);
    
    this.button_7 = new LCARSButton("7", "7", 0, (2*LCARS_BTN_HEIGHT + 2*KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_7.element);
    
    this.button_8 = new LCARSButton("8", "8", (LCARS_BTN_WIDTH + KP_BUTTON_X_SPACE), (2*LCARS_BTN_HEIGHT + 2*KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_8.element);
    
    this.button_9 = new LCARSButton("9", "9", (2*LCARS_BTN_WIDTH + 2*KP_BUTTON_X_SPACE), (2*LCARS_BTN_HEIGHT + 2*KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_9.element);

    this.button_star = new LCARSButton("*", "*", 0, (3*LCARS_BTN_HEIGHT + 3*KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);

    this.button_0 = new LCARSButton("0", "0", (LCARS_BTN_WIDTH + KP_BUTTON_X_SPACE), (3*LCARS_BTN_HEIGHT + 3*KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    this.element.appendChild(this.button_0.element);
    
    this.button_hash = new LCARSButton("#", "#", (2*LCARS_BTN_WIDTH + 2*KP_BUTTON_X_SPACE), (3*LCARS_BTN_HEIGHT + 3*KP_BUTTON_Y_SPACE), 0, this.properties, " ", this.auxLabelProperties);
    
    if((this.auxLabelProperties & ES_CLASS) == EKP_AUX_KEYS) {
        this.element.appendChild(this.button_star.element);
        this.element.appendChild(this.button_hash.element);
    }


}


LCARSKeypad.prototype.setAuxLabelProperties = function(auxLabelProperties) {
    
}


LCARSKeypad.prototype.addEventListener = function(event, listener) {
    this.button_1.addEventListener(event, listener);
    this.button_2.addEventListener(event, listener);
    this.button_3.addEventListener(event, listener);
    this.button_4.addEventListener(event, listener);
    this.button_5.addEventListener(event, listener);
    this.button_6.addEventListener(event, listener);
    this.button_7.addEventListener(event, listener);
    this.button_8.addEventListener(event, listener);
    this.button_9.addEventListener(event, listener);
    this.button_0.addEventListener(event, listener);
    this.button_star.addEventListener(event, listener);
    this.button_hash.addEventListener(event, listener);
}


LCARSKeypad.prototype.getElementForButton = function(button) {
    
    var _element;
    
    if(button == "1") {
        _element = this.button_1;
    }
    else if(button == "2") {
        _element = this.button_2;
    }
    else if(button == "3") {
        _element = this.button_3;
    }
    else if(button == "4") {
        _element = this.button_4;
    }
    else if(button == "5") {
        _element = this.button_5;
    }
    else if(button == "6") {
        _element = this.button_6;
    }
    else if(button == "7") {
        _element = this.button_7;
    }
    else if(button == "8") {
        _element = this.button_8;
    }
    else if(button == "9") {
        _element = this.button_9;
    }
    else if(button == "0") {
        _element = this.button_0;
    }
    else if(button == "*") {
        _element = this.button_star;
    }
    else if(button == "#") {
        _element = this.button_hash;
    }

    return _element;
}


LCARSKeypad.prototype.addButtonEventListener = function(button, event, listener) {
    
    var _element;
    
    _element = this.getElementForButton(button);
    
    _element.addEventListener(event, listener);
}


LCARSKeypad.prototype.setAuxText = function(one, two, three, four, five, six, seven, eight, nine, zero, star, hash) {
    this.button_1.setAuxText(one);
    this.button_2.setAuxText(two);
    this.button_3.setAuxText(three);
    this.button_4.setAuxText(four);
    this.button_5.setAuxText(five);
    this.button_6.setAuxText(six);
    this.button_7.setAuxText(seven);
    this.button_8.setAuxText(eight);
    this.button_9.setAuxText(nine);
    this.button_0.setAuxText(zero);
    this.button_star.setAuxText(star);
    this.button_hash.setAuxText(hash);
}


LCARSKeypad.prototype.setButtonAuxText = function(button, text) {
    
    var _element;
    
    _element = this.getElementForButton(button);
    
    _element.setAuxText(text);
}




