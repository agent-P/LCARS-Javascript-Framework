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
const ES_SELECTED   = 0x00000100;   // Element selected
const ES_DISABLED   = 0x00000200;   // Element disabled
const ES_SELDISED   = 0x00000300;   // Element selected and disabled
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

const TEXT_Y_INSET = 10;
const TEXT_X_INSET = 20;

const LCARS_BTN_HEIGHT    = 60;
const LCARS_BTN_WIDTH     = 150;
const LCARS_BTN_SPACING   = 5;
const LCARS_CORNER_HEIGHT = 92;

const SHAPE_SUFFIX = "_shape";
const TEXT_SUFFIX = "_text";

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


LCARSComponent = function(id, label, x, y, properties) {
    if(id != undefined) { // to prevent execution when used for inheritence and not instantiation
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
    this.element().addEventListener(event, callback, false);
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
    
    /** Create the DOM object. */
    this.shapeElement = document.createElementNS(svgNS, "path");
    this.shapeElement.setAttribute("id", this.name + SHAPE_SUFFIX);
    this.shapeElement.setAttribute("d", rectString);
    this.shapeElement.setAttribute("fill", this.color);
    
    this.element.appendChild(this.shapeElement);
    
    /** Set the component's dynamics. */
    this.setComponentDynamics();    
}


LCARSComponent.prototype.drawText = function() {
    this.textElement = document.createElementNS(svgNS, "text");
    this.textElement.setAttribute("x", this.getTextX());
    this.textElement.setAttribute("y", this.getTextY());
    this.textElement.setAttribute("text-anchor", this.getTextAnchor());
    this.textElement.setAttribute("fill", this.textColor);
    this.textElement.setAttribute("font-family", LCARS_FONT);
    this.textElement.setAttribute("font-size", this.fontSize);
    
    this.setText(this.label);
    
    this.element.appendChild(this.textElement);
}

LCARSComponent.prototype.setText = function(textString) {
    this.textElement.textContent = textString;
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
        ",0 q-35,0 -35,35";
    }
    else if(this.shape == ES_SHAPE_SW) {
        pathString += " m0," + (this.height - LCARS_CORNER_HEIGHT) +
        sideStringB + "l0,27 q0,35 35,35 l" +
        armStringW +
        ",0 l-110,0 q-75,0 -75,-75";
    }
    else if(this.shape == ES_SHAPE_SE) {
        pathString += " m" + (this.width-150) + "," + (this.height - LCARS_CORNER_HEIGHT) +
        sideStringB + " l0,17 q0,75 -75,75 l-110,0 l-" +
        armStringE + ",0 q35,0 35,-35";
    }
    else if(this.shape == ES_SHAPE_NE) {
        pathString += " m" + (this.width-185) + ",0 l110,0 q75,0 75,75 l0,17" +
        sideStringT + " l0,-27 q0,-35 -35,-35 l-" +
        armStringE + ",0";
    }
    
    /** Create the DOM object. */
    this.shapeElement = document.createElementNS(svgNS, "path");
    this.shapeElement.setAttribute("id", this.name + SHAPE_SUFFIX);
    this.shapeElement.setAttribute("d", pathString);
    this.shapeElement.setAttribute("fill", this.color);
    
    this.element.appendChild(this.shapeElement);
    
    /** Set the component's dynamics. */
    this.setComponentDynamics();
}

LCARSCorner.prototype.drawText = function() {
    var x;
    var y;
    var textAnchor;
    
    if(this.label != "" && this.label != null) {
        switch(this.properties & ES_SHAPE) {
            case ES_SHAPE_SE:
                x = this.width - 140;
                y = this.fontSize;
                textAnchor = "start";
                break;
            case ES_SHAPE_SW:
                x = 140;
                y = this.fontSize;
                textAnchor = "end";
                break;
            case ES_SHAPE_NW:
                x = 140;
                y = this.height - 10;
                textAnchor = "end";
                break;
            case ES_SHAPE_NE:
                x = this.width - 140;
                y = this.height - 10;
                textAnchor = "start";
                break;
        }
        
        this.textElement = document.createElementNS(svgNS, "text");
        this.textElement.setAttribute("x", x);
        this.textElement.setAttribute("y", y);
        this.textElement.setAttribute("text-anchor", textAnchor);
        this.textElement.setAttribute("fill", this.textColor);
        this.textElement.setAttribute("font-family", LCARS_FONT);
        this.textElement.setAttribute("font-size", this.fontSize);
        
        this.setText(this.label);
        
        this.element.appendChild(this.textElement);
    }
}


LCARSRectangle.prototype = new LCARSComponent();
function LCARSRectangle(name, label, x, y, width, height, properties) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.width = width;
    this.height = height;
    this.static = ES_STATIC;  // Rectangles are always static.
    
    this.drawShape();
    this.drawText();
}


LCARSButton.prototype = new LCARSComponent();
function LCARSButton(name, label, x, y, height, properties) {
    LCARSComponent.call(this, name, label, x, y, properties);
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
}


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







