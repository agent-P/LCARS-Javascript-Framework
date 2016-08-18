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
const LCARS_SPACE         = 5;
const LCARS_CORNER_HEIGHT = 92;

const SHAPE_SUFFIX = "_shape";
const TEXT_SUFFIX = "_text";
const AUX_TEXT_SUFFIX = "_aux_text";

const DAYS = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const MONTHS = [
                "\x00",          /** substitution token to support parsing */
                "January",       /** MONTHS[1] = "January" */
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

const MONTHS_ABBREVIATED = [
                "\x01",          /** substitution token to support parsing */
                "Jan",           /** MONTHS_ABBREVIATED[1] = "Jan" */
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
                ];

const DAYS_OF_WEEK = [
              "\x02",          /** substitution token to support parsing */
              "Sunday",        /** DAYS_OF_WEEK[1] = "Sunday" */
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
              ];

const DAYS_OF_WEEK_ABBREVIATED = [
              "\x03",          /** substitution token to support parsing */
              "Sun",           /** DAYS_OF_WEEK_ABBREVIATED[1] = "Sunday" */
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat"
              ];


/**
 * The base class for all of the non component specific functionality.
 *
 * @author Perry Spagnola
 * @version 1.0
 */
function LCARS() {
    
}


/**
 * Derive the LCARS color from the LCARS properties variable.
 * <p>
 * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
 * returns the color value for the color property. The eight (8) color options are:
 * <ul>
 * <li> white:       #CCDDFF
 * <li> light blue:  #5599FF
 * <li> medium blue: #3366FF
 * <li> blue:        #0011EE
 * <li> dark blue:   #000088
 * <li> yellow:      #CCA300
 * <li> orange:      #CC6600
 * <li> red:         #A30000
 * </ul>
 *
 * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
 * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
 */
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


/**
 * Derive the LCARS text color from the LCARS properties variable.
 * <p>
 * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
 * returns the text color value for the color property. The eight (8) color options are:
 * <ul>
 * <li> white:       #CCDDFF
 * <li> light blue:  #5599FF
 * <li> medium blue: #3366FF
 * <li> blue:        #0011EE
 * <li> dark blue:   #000088
 * <li> yellow:      #CCA300
 * <li> orange:      #CC6600
 * <li> red:         #A30000
 * </ul>
 *
 * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
 * @return the text color value for the color property specified in the LCARS <code>properties</code> paramenter.
 */
LCARS.getTextColor = function(properties) {
    var color = "";
    
    switch(properties & ES_COLOR) {
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


/**
 * Simple setter for setting the LCARS font to the font specified by the 
 * argument.
 *
 * @param font the font to set as the LCARS font
 */
LCARS.setFont = function(font) {
    this.font = font;
}

/**
 * Simple getter for getting the LCARS font.
 *
 * @return the font that was set as the LCARS font
 */
LCARS.getFont = function() {
    return this.font;
}

/**
 * Derive the LCARS font size from the LCARS properties variable.
 * <p>
 * Masks the <code>properties</code> paramenter for <code>ES_FONT</code>, and
 * returns the font size value for the font size property.
 *
 * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
 * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
 */
LCARS.getLCARSFontSize = function(properties) {
    switch(properties & ES_FONT) {
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
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
 * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
 */
LCARS.getTextWidth  = function(text, font) {
    canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * Calls <code>LCARS.getTextWidth()</code> for each character of the String argument <code>text</code>,
 * and returns the sum of the length of the characters.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
 * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
 */
LCARS.getTextWidth2  = function(text, font) {
    var width = 0;
    
    for (var i=0; i < text.length; i++) {
        console.log(text.charAt(i));
        width += LCARS.getTextWidth(text.charAt(i), font);
        console.log(width);
    }

    console.log(width);
    return width;
}


/**
 * LCARSComponent class
 */
LCARSComponent = function(id, label, x, y, properties) {
    if(id != undefined) { /** Prevent execution when used for inheritence and not instantiation. */
        this.composite = false;
        this.id = id;
        this.label = label;
        this.x = x;
        this.y = y;
        this.properties = properties;
        this.static = properties & ES_STATIC;
        this.blinking = properties & ES_BLINKING;
        this.color = this.getColor();
        this.overColor = this.getOverColor();
        this.downColor = this.getDownColor();
        this.textColor = this.getTextColor();
        this.fontSize = LCARS.getLCARSFontSize(this.properties);
        
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

LCARSComponent.prototype.getOverColor = function(overrideColor) {
    var defaultReturn = "";
    var color;
    
    if(overrideColor == null) {
        color = this.properties & ES_COLOR;
    }
    else {
        color = overrideColor;
    }
    
    switch(color) {
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
    
    return defaultReturn;
}

LCARSComponent.prototype.getDownColor = function(overrideColor) {
    var defaultReturn = "";
    var color;
    
    if(overrideColor == null) {
        color = this.properties & ES_COLOR;
    }
    else {
        color = overrideColor;
    }
    
    switch(color) {
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
    
    return defaultReturn;
}


/**
 * Method to create a string of color values from dark to light derived from the
 * LCARS color palette. I uses the Down color, the normal color, and the Over
 * color in that order.
 *
 * @param color the color to derive the string of colors from
 * @return the string of color values
 */
LCARSComponent.prototype.getBlinkColors = function(color) {
    
    if(color == null) {
        color = this.properties & ES_COLOR;
    }
    
    var colorString = "#000;" + this.getDownColor(color) + ";" + LCARS.getColor(color) + ";" + this.getOverColor(color);
    
    return colorString;
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


LCARSComponent.prototype.setPosition = function(x, y) {
    this.element.setAttribute("transform", 'translate(' + x + ',' +  y +')');
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

const BLINK_DURATION_ERROR = "0.5s";
const BLINK_DURATION_WARNING = "0.75s";
/**
 * Method to turn blinking on and off for the component. If the <code>enabled</code> argument
 * is <code>true</code>, it creates SVG shape and text animations for the component. Component
 * color and blink animation duration can be set. If left blank or specified as null, default 
 * color and animation duration will be used.
 * <p>Color must be set using the LCARS palette constants, not specific color values. Duration
 * can be set using one of two constants <code>BLINK_DURATION_ERROR</code> or
 * <code>BLINK_DURATION_WARNING</code>, or it can be set to an arbitrary value using the form
 * <code>"0.0s"</code>. Note that the "s" suffix stands for seconds.
 *
 * @param enabled <code>true</code> if blinking is enabled, <code>false</code> if not
 * @param color the color to blink the component, default component color if null
 * @param duration the duration of the blink animation in the form <code>"0.0s"</code>, the "s" is for seconds, default if null
 */
LCARSComponent.prototype.setBlinking = function(enabled, color, duration) {
    
    /** If the duration argument is null, set a default blink duration. */
    if(duration == null) {
        duration = BLINK_DURATION_WARNING;
    }
    
    /** If blinking is enabled... */
    if(enabled) {
        /** Create the DOM object for shape animation, and set its attributes. */
        this.animateElement = document.createElementNS(svgNS, "animate");
        this.animateElement.setAttribute("attributeType", "XML");
        this.animateElement.setAttribute("attributeName", "fill");
        this.animateElement.setAttribute("values", this.getBlinkColors(color));
        this.animateElement.setAttribute("dur", duration);
        this.animateElement.setAttribute("repeatCount", "indefinite");
        /** Append the animation element to the shape element. */
        this.shapeElement.appendChild(this.animateElement);
        
        /** Create the DOM object for the shape's text animation, and set its attributes. */
        this.textAnimateElement = document.createElementNS(svgNS, "animate");
        this.textAnimateElement.setAttribute("attributeType", "XML");
        this.textAnimateElement.setAttribute("attributeName", "fill");
        this.textAnimateElement.setAttribute("values", "#000;" + LCARS.getTextColor(color));
        this.textAnimateElement.setAttribute("dur", duration);
        this.textAnimateElement.setAttribute("repeatCount", "indefinite");
        /** Append the animation element to the text element. */
        this.textElement.appendChild(this.textAnimateElement);
        
        
    }
    /** Else if blinking is not enabled... */
    else {
        /** If the shape animate element exists, remove it. */
        if(this.animateElement != null) {
            this.shapeElement.removeChild(this.animateElement);
        }
        /** If the text animate element exists, remove it. */
        if(this.textAnimateElement != null) {
            this.textElement.removeChild(this.textAnimateElement);
        }
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


LCARSComponent.prototype.setTextFontSize = function(textFontSize) {
    this.fontSize = textFontSize;
    this.textElement.setAttribute("font-size", this.fontSize);
}


LCARSComponent.prototype.setVisible = function(visible) {
    if(visible) {
        this.element.setAttributeNS(null, 'display', 'inline');
    }
    else {
        this.element.setAttributeNS(null, 'display', 'none');
    }
}



/** 
 * LCARSCorner component
 */
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
 * LCARS TextArea component
 */
LCARSTextArea.prototype = new LCARSComponent();
function LCARSTextArea(name, label, x, y, width, rows, properties) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.composite = false;
    this.static = ES_STATIC;  // TextAreas are always static.
    this.textColor = this.getColor();
    
    this.width = width;
    this.rows = rows;
    
    this.lineSpacing = 1.0;
    
    this.nowrap = true;  // Default to not wrapping lines of text
    //this.canvasFont = Math.round(this.fontSize*0.75) + "pt " + LCARS.getFont();
    this.canvasFont = Math.round(this.fontSize*0.54) + "pt " + LCARS.getFont();
    
    this.drawText();
}

LCARSTextArea.prototype.getTextAnchor = function() {
    if((this.properties & ES_LABEL) == 0) {
        this.properties |= ES_LABEL_W;
    }
    
    return LCARSComponent.prototype.getTextAnchor.call(this);
}

LCARSTextArea.prototype.drawText = function() {
    this.textElement = document.createElementNS(svgNS, "text");
    this.textElement.setAttribute("id", this.id + TEXT_SUFFIX);
    this.textElement.setAttribute("font-family", LCARS.getFont());
    this.textElement.setAttribute("font-size", this.fontSize);
    this.textElement.setAttribute("fill", this.textColor);

    this.lineElements = [];
    for(index = 0; index < this.rows; index++) {
        this.lineElements.push(document.createElementNS(svgNS, "tspan"));
        this.lineElements[index].setAttribute("id", this.id + "_" + index + TEXT_SUFFIX);
        this.lineElements[index].setAttribute("x", 0);
        this.lineElements[index].setAttribute("dy", this.fontSize * this.lineSpacing);
        
        /** Set <code>tspan</code> attribute to preserve the space for blank lines, and initialize
         the line as blank. */
        this.lineElements[index].setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
        this.lineElements[index].textContent = "";

        /** Add the <code>tspan</code> SVG element to the parent SVG <code>textElement</code>. */
        this.textElement.appendChild(this.lineElements[index]);
    }
    
    this.element.appendChild(this.textElement);
    
    return "";
}


LCARSTextArea.prototype.appendLine = function(lineOfText) {
    
    var resultString = this.wrap(lineOfText);
    var resultStringLength = resultString.length;
    
    for(var index = 0; index < resultStringLength; index++) {
        this.addLine(resultString[index]);
    }
}


LCARSTextArea.prototype.addLine = function(lineOfText) {
    
    for(index = 0; index < this.rows; index++) {
        if(this.lineElements[index] == "") {
            this.lineElements[index].textContent = lineOfText;
        }
        else {
            this.scrollUp();
            this.lineElements[this.rows-1].textContent = lineOfText;
        }
    }
}


LCARSTextArea.prototype.wrap = function(lineOfText) {
    var resultStrings = [];
    
    if(this.nowrap == true) {
        /** If nowrap is specified trim the string to the supported width,
         and return it. */
        resultStrings.push(this.truncate(lineOfText));
    }
    else {
        var words = lineOfText.split(' ');
        var w, x, i, l;
        var spaceWidth = LCARS.getTextWidth(' ', this.canvasFont);
        var spaceLeft = this.width;
        
        var line = [];
        resultStrings.push(line);
        
        for( i = 0, l = words.length; i < l; i++ ) {
            w = words[i];
            x = LCARS.getTextWidth(w, this.canvasFont) + spaceWidth;
            
            if( x > spaceLeft ) {
                line = [];
                resultStrings.push(line);
                line.push(w);
                spaceLeft = this.width - x;
            }
            else {
                spaceLeft = spaceLeft - x;
                line.push(w);
            }
        }
        
        for( i = 0, l = resultStrings.length; i < l; i++ ) {
            resultStrings[i] = resultStrings[i].join(' ');
        }
    }
    
    return resultStrings;
}


LCARSTextArea.prototype.truncate = function(lineOfText) {
    var resultString = [];
    var canvasFont = Math.round(this.fontSize*0.49) + "pt " + LCARS.getFont();
    
    var i = 0;
    while(LCARS.getTextWidth(resultString, canvasFont) < this.width) {
        resultString[i] = lineOfText[i];
        i++;
    }
    
    return resultString.join('');
}

LCARSTextArea.prototype.setNoWrap = function(nowrap) {
    this.nowrap = nowrap;
}


LCARSTextArea.prototype.initTextArea = function() {
    for(index = 0; index < this.rows; index++) {
        this.lineElements[index].textContent = " ";
    }
}


LCARSTextArea.prototype.setLineSpacing = function(spacing) {
    this.lineSpacing = spacing;
    for(index = 0; index < this.rows; index++) {
        this.lineElements[index].setAttribute("dy", this.fontSize * this.lineSpacing);
    }
}


LCARSTextArea.prototype.setTextFontSize = function(textFontSize) {
    this.fontSize = textFontSize;
    this.textElement.setAttribute("font-size", this.fontSize);
    this.setLineSpacing(this.lineSpacing);
}


LCARSTextArea.prototype.setText = function(index, lineOfText) {
    this.lineElements[index].textContent = lineOfText;
}


LCARSTextArea.prototype.clearText = function(index) {
    this.lineElements[index].textContent = " ";
}


LCARSTextArea.prototype.clearTextArea = function() {
    for(index = 0; index < this.rows; index++) {
        this.lineElements[index].textContent = "";
    }
}


LCARSTextArea.prototype.scrollUp = function() {
    for(index = 0; index < this.rows-1; index++) {
        this.lineElements[index].textContent = this.lineElements[index+1].textContent;
    }
    
    this.lineElements[this.rows-1].textContent = "";
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
    
    this.auxLabelProperties = auxLabelProperties;
    
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




/**
 * LCARS Analog Clock component
 */
LCARSClockAnalog.prototype = new LCARSComponent();
function LCARSClockAnalog(name, label, x, y, radius, properties, updateInterval, format) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.static = ES_STATIC;  // Text is always static.
    this.textColor = this.getColor();
    
    /** Set the size of the clock face. */
    this.element.style.height = radius*2 + "px";
    this.element.style.width = radius*2 + "px";
    
    this.radius = radius;
    
    this.updateInterval = updateInterval;
    this.format = format;
    
    this.intervalVariable = null;
    
    this.drawShape();
    
    this.update();
    
    this.start();
}

/**
 * Function to start the clock. It retrieves a reference to the clock object,
 * and passes it to an interval timer. The update interval is a class
 * variable, and is passed to the constructor of the object.
 */
LCARSClockAnalog.prototype.start = function() {
    
    thisObj = this; // Can't just pass "this" to the setInterval function.
    
    thisObj.intervalVariable = setInterval( (function(thisObj) { return function() { thisObj.update(); } })(this), thisObj.updateInterval );
}

/**
 * Function to stop the clock. It test the interval variable, and if it is not
 * null, it clears it.
 */
LCARSClockAnalog.prototype.stop = function() {
    if(!(intervalVariable == null)) {
        clearInterval(intervalVariable);
    }
}


/**
 * Function to update the clock with the current time. It gets passed to an
 * interval timer and will update the time and date at the rate set by the
 * interval variable.
 */
LCARSClockAnalog.prototype.update = function() {
    
    /** Update to the current date and time. */
    now = new Date();
    
    /** Calculate the angles in degrees for the secons, minutes, and hours hands. */
    secondsDegrees = 6*now.getSeconds();
    minuteDegrees = 6*now.getMinutes();
    hourDegrees = 30*(now.getHours()%12) + now.getMinutes()/2;
    
    /** Rotate the hands of the clock. */
    this.secondHand.setAttribute('transform', 'rotate(' + secondsDegrees + ' ' + centerX + ' ' + centerY + ')');
    this.minuteHand.setAttribute('transform', 'rotate(' + minuteDegrees + ' ' + centerX + ' ' + centerY + ')');
    this.hourHand.setAttribute('transform', 'rotate(' + hourDegrees + ' ' + centerX + ' ' + centerY + ')');
    
}

LCARSClockAnalog.prototype.drawShape = function() {
    
    this.drawClockFace();

    this.drawClockHands();
    
    return "";
}


LCARSClockAnalog.prototype.drawClockHands = function() {
    
    this.drawClockFace();
    
    centerX = this.radius;
    centerY = this.radius;
    
    this.hourHand = document.createElementNS(svgNS, "line");
    this.hourHand.setAttribute('x1', centerX);
    this.hourHand.setAttribute('y1', centerY);
    this.hourHand.setAttribute('x2', centerX);
    this.hourHand.setAttribute('y2', this.radius*0.5);
    this.hourHand.setAttribute('stroke', this.color);
    this.hourHand.setAttribute('stroke-width', this.radius/10);
    this.hourHand.setAttribute('stroke-linecap', 'round');
    
    this.minuteHand = document.createElementNS(svgNS, "line");
    this.minuteHand.setAttribute('x1', centerX);
    this.minuteHand.setAttribute('y1', centerY);
    this.minuteHand.setAttribute('x2', centerX);
    this.minuteHand.setAttribute('y2', this.radius*0.25);
    this.minuteHand.setAttribute('stroke', this.color);
    this.minuteHand.setAttribute('stroke-width', this.radius/20);
    this.minuteHand.setAttribute('stroke-linecap', 'round');
    
    this.secondHand = document.createElementNS(svgNS, "line");
    this.secondHand.setAttribute('x1', centerX);
    this.secondHand.setAttribute('y1', centerY);
    this.secondHand.setAttribute('x2', centerX);
    this.secondHand.setAttribute('y2', this.radius*0.15);
    this.secondHand.setAttribute('stroke', this.color);
    this.secondHand.setAttribute('stroke-width', this.radius/40);
    this.secondHand.setAttribute('stroke-linecap', 'round');
    
    this.element.appendChild(this.hourHand);
    this.element.appendChild(this.minuteHand);
    this.element.appendChild(this.secondHand);
}



LCARSClockAnalog.prototype.drawClockFace = function() {
    
    centerX = this.radius;
    centerY = this.radius;
    
    xOffset = this.radius/35;
    yOffset = this.radius/15;
    
    
    angleIncrement = 360/12;
    
    for(i=12; i>=1; i--) {
        
        /** Set the angle and convert to radians. */
        angle = ((angleIncrement * i) - 90) * (Math.PI/180);
        
        /** Calculate the x, y coordinates of the hour text. */
        x = centerX + this.radius * Math.cos(angle);
        y = centerY + this.radius * Math.sin(angle);
        
        var adjustedOffsetX = xOffset;
        if(i >= 10) {
            adjustedOffsetX = xOffset*2;
        }
        
        /** Create the hour text object and add it to the parent SVG. */
        clockHourText = new LCARSText("hour_" + i.toString(), i.toString(), x-adjustedOffsetX, y+yOffset, this.properties);
        //clockHourText.setTextFontSize(this.font_size);
        clockHourText.setTextFontSize(this.radius/5);
        
        
        this.element.appendChild(clockHourText.element);
    }
    
}




/**
 * LCARS Clock component
 *
 * @author Perry Spagnola
 * @version 1.0
 */
LCARSClock.prototype = new LCARSComponent();
function LCARSClock(name, label, x, y, properties, updateInterval, format) {
    LCARSComponent.call(this, name, label, x, y, properties);
    this.static = ES_STATIC;  // Text is always static.
    this.textColor = this.getColor();
    
    this.updateInterval = updateInterval;
    this.format = format;
    
    this.intervalVariable = null;
    
    this.drawText();
    
    this.update();
    
    this.start();
}

/**
 * Function to start the clock. It retrieves a reference to the clock object,
 * and passes it to an interval timer. The update interval is a class 
 * variable, and is passed to the constructor of the object.
 */
LCARSClock.prototype.start = function() {
    
    thisObj = this; // Can't just pass "this" to the setInterval function.
    
    thisObj.intervalVariable = setInterval( (function(thisObj) { return function() { thisObj.update(); } })(this), thisObj.updateInterval );
}

/**
 * Function to stop the clock. It test the interval variable, and if it is not
 * null, it clears it.
 */
LCARSClock.prototype.stop = function() {
    if(!(intervalVariable == null)) {
        clearInterval(intervalVariable);
    }
}


/**
 * Function to update the clock with the current time. It gets passed to an
 * interval timer and will update the time and date at the rate set by the
 * interval variable.
 */
LCARSClock.prototype.update = function() {
    
    /** Update to the current date and time. */
    now = new Date();

    /** Initialize the format for the updated time date string. */
    clockString = this.format;
    
    /** Format the updated current time date, and set the text field. */
    this.setText(this.formatString(clockString, now));
    
}


/**
 * Function to add a leading zero in front of numbers to the limit of the
 * length argument to support hours, minutes, seconds, and milliseconds.
 *
 * @param number the number to pad with a leading zero
 * @param length the length of the number to pad leading zeros to
 */
LCARSClock.prototype.padLeadingZero = function(number, length) {
    
    number = number + "";
    length = length || 2;
    
    while (number.length < length) {
        number = "0" + number;
    }
    
    return number;
}


/**
 * Function to format the time and date output associated with the Date 
 * object <code>now</code> argument based on the <code>formatString</code> argument.
 * <p>
 * Note that the order of the parse is important to support the regular expressions that 
 * are used. See the notes embedded in the code.
 * <p>
 * The date format parameters are as follows:
 * <ul>
 * <li> yyyy - the four digit year
 * <li> yy   - the two digit year
 * <li> y    - the four digit year
 * <li> MMMM - the full name of the month
 * <li> MMM  - the abbreviated name of the month
 * <li> MM   - the month number with a leading zero
 * <li> M    - the month number without a leading zero
 * <li> dddd - the full name of the day
 * <li> ddd  - the abbreviated name of the day
 * <li> dd   - the day number with a leading zero
 * <li> d    - the day number without a leading zero
 * <li> HH   - the 24 hour number with a leading zero
 * <li> H    - the 24 hour number without a leading zero
 * <li> hh   - the 12 hour number with a leading zero
 * <li> h    - the 12 hour number without a leading zero
 * <li> mm   - the minutes number with a leading zero
 * <li> m    - the minutes number without a leading zero
 * <li> ss   - the seconds number with a leading zero
 * <li> s    - the seconds number without a leading zero
 * <li> fff  - the milliseconds number with two leading zeroes
 * <li> ff   - the milliseconds number with one leading zero
 * <li> f    - the milliseconds number without leading zeroes
 * <li> TT   - AM - PM upper case
 * <li> T    - AM - PM upper case single character (A, P)
 * <li> tt   - AM - PM lower case
 * <li> t    - AM - PM lower case single character (a, p)
 * <li> K    - the time zone offset from UTC in the form +/-00:00
 * <li> Z    - the three character abbreviated time zone
 *</ul>
 *
 * @param formatString the string to parse for the format parameters
 * @param now the Date object to format
 * @return the formatted date string
 */
LCARSClock.prototype.formatString = function(formatString, now) {
    
    /** Get all the time and date paramenters for the <code>now</code> argument. */
    year = now.getFullYear();
    month = now.getMonth() + 1; /** add 1, because January is zero. */
    day = now.getDate();
    dayOfWeek = now.getDay() + 1; /** add 1, because Sunday is zero. */
    hour24 = now.getHours();
    hour12 = hour24 > 12 ? hour24-12 : hour24==0 ? 12 : hour24;
    meridiem = hour24 > 12 ? "PM" : "AM";
    minute = now.getMinutes();
    second = now.getSeconds();
    millisecond = now.getMilliseconds();
    timeZoneOffset = now.getTimezoneOffset();
    timeZoneOffset = Math.abs(timeZoneOffset);
    var tzHrs = Math.floor(timeZoneOffset / 60);
    var tzMin = timeZoneOffset % 60;
    var timeZoneOffsetString = timeZoneOffset > 0 ? "-" : "+";
    timeZoneOffsetString += this.padLeadingZero(tzHrs) + ":" + this.padLeadingZero(tzMin);
    timeZoneString = String(String(now).split("(")[1]).split(")")[0];
    

    /** Parse the year paramenter, and replace it with the built year string. */
    formatString = formatString.replace(/(^|[^\\])yyyy+/g, "$1" + year);
    formatString = formatString.replace(/(^|[^\\])yy/g, "$1" + year.toString().substr(2,2));
    formatString = formatString.replace(/(^|[^\\])y/g, "$1" + year);
    
    /** Parse the month parameter, and replace it with the built month string. Note that
     month names are replaced by tokens to allow the rest of the parse to complete. They
     are replaced by the month strings when the rest of the parse is finished. */
    formatString = formatString.replace(/(^|[^\\])MMMM+/g, "$1" + MONTHS[0]);
    formatString = formatString.replace(/(^|[^\\])MMM/g, "$1" + MONTHS_ABBREVIATED[0]);
    formatString = formatString.replace(/(^|[^\\])MM/g, "$1" + this.padLeadingZero(month));
    formatString = formatString.replace(/(^|[^\\])M/g, "$1" + month);
    
    /** Parse the day parameter, and replace it with the built day string. Note that
     day names are replaced by tokens to allow the rest of the parse to complete. They
     are replaced by the day strings when the rest of the parse is finished. */
    formatString = formatString.replace(/(^|[^\\])dddd+/g, "$1" + DAYS_OF_WEEK[0]);
    formatString = formatString.replace(/(^|[^\\])ddd/g, "$1" + DAYS_OF_WEEK_ABBREVIATED[0]);
    formatString = formatString.replace(/(^|[^\\])dd/g, "$1" + this.padLeadingZero(day));
    formatString = formatString.replace(/(^|[^\\])d/g, "$1" + day);
    
    /** Parse the hour paramenter, and replace it with the built hour string. */
    formatString = formatString.replace(/(^|[^\\])HH+/g, "$1" + this.padLeadingZero(hour24));
    formatString = formatString.replace(/(^|[^\\])H/g, "$1" + hour24);
    formatString = formatString.replace(/(^|[^\\])hh+/g, "$1" + this.padLeadingZero(hour12));
    formatString = formatString.replace(/(^|[^\\])h/g, "$1" + hour12);

    /** Parse the minutes paramenter, and replace it with the built minutes string. */
    formatString = formatString.replace(/(^|[^\\])mm+/g, "$1" + this.padLeadingZero(minute));
    formatString = formatString.replace(/(^|[^\\])m/g, "$1" + minute);
    
    /** Parse the seconds paramenter, and replace it with the built seconds string. */
    formatString = formatString.replace(/(^|[^\\])ss+/g, "$1" + this.padLeadingZero(second));
    formatString = formatString.replace(/(^|[^\\])s/g, "$1" + second);
    
    /** Parse the year milliseconds, and replace it with the built milliseconds string. */
    formatString = formatString.replace(/(^|[^\\])fff+/g, "$1" + this.padLeadingZero(millisecond, 3));
    millisecond = Math.round(millisecond / 10);
    formatString = formatString.replace(/(^|[^\\])ff/g, "$1" + this.padLeadingZero(millisecond));
    millisecond = Math.round(millisecond / 10);
    formatString = formatString.replace(/(^|[^\\])f/g, "$1" + millisecond);
    
    /** Parse the meridiem paramenter, and replace it with the built meridiem string. */
    formatString = formatString.replace(/(^|[^\\])TT+/g, "$1" + meridiem);
    formatString = formatString.replace(/(^|[^\\])T/g, "$1" + meridiem.charAt(0));
    formatString = formatString.replace(/(^|[^\\])tt+/g, "$1" + meridiem.toLowerCase());
    formatString = formatString.replace(/(^|[^\\])t/g, "$1" + meridiem.toLowerCase().charAt(0));
    
    /** Parse the timezone offset paramenter, and replace it with the built timezone offset string. */
    formatString = formatString.replace(/(^|[^\\])K/g, "$1" + timeZoneOffsetString);
    
    /** Parse the timezone paramenter, and replace it with the timezone abbreviated name. */
    formatString = formatString.replace(/(^|[^\\])Z/g, "$1" + timeZoneString);
    
    /** Parse the month paramenter token, and replace it with the built month string. */
    formatString = formatString.replace(new RegExp(MONTHS[0], "g"), MONTHS[month]);
    formatString = formatString.replace(new RegExp(MONTHS_ABBREVIATED[0], "g"), MONTHS_ABBREVIATED[month]);
    
    /** Parse the day paramenter token, and replace it with the built day string. */
    formatString = formatString.replace(new RegExp(DAYS_OF_WEEK[0], "g"), DAYS_OF_WEEK[dayOfWeek]);
    formatString = formatString.replace(new RegExp(DAYS_OF_WEEK_ABBREVIATED[0], "g"), DAYS_OF_WEEK_ABBREVIATED[dayOfWeek]);
    
    /** return the formatted string. */
    return formatString;
}

LCARSClock.prototype.getTextAnchor = function() {
    if((this.properties & ES_LABEL) == 0) {
        this.properties |= ES_LABEL_W;
    }
    
    return LCARSComponent.prototype.getTextAnchor.call(this);
}

LCARSClock.prototype.drawShape = function() {
    
    
    return "";
}



const MAX_DAYS_IN_MONTH_DISPLAY = 42; /** 6 lines of 7 days */
/**
 * LCARS Calendar component - It provides a maximum six (6) week, seven (7) day array of days
 * with a month and year header.
 * <p>
 * The format of the days array is based on the starting day of the week for the month and the
 * number of days in the month. The weeks start on Sundays and end on Saturdays. Days for the 
 * preceding and following months are blank. The days are color coded as follows:
 * <ul>
 * <li> Sunday    orange          <code>[EC_ORANGE]</code>
 * <li> Weekday   light blue      <code>[EC_L_BLUE]</code>
 * <li> Saturday  blue            <code>[EC_BLUE]</code>
 * <li> Today     yellow          <code>[EC_YELLOW]</code>
 * </ul>
 * <p>
 * Note: There is currently no convenience method for changing the color coding of the days.
 *
 * @author Perry Spagnola
 * Aversion 1.0
 */
LCARSCalendar.prototype = new LCARSComponent();
function LCARSCalendar(name, x, y, font_size, daySpacing, properties) {
    LCARSComponent.call(this, name, "", x, y, properties | ES_LABEL_E); /** Calendar doesn't have a label. */
    this.static = ES_STATIC;  /** Calendar is always static. */
    this.textColor = this.getColor();
    
    this.font_size = font_size;
    
    this.daySpacing = daySpacing;

    /** Set the curretn day as today. */
    this.setToday();

    this.intervalVariable = null;

    /** Set the initial displayed month and year. */
    this.displayMonth = this.currentMonth;
    this.displayYear = this.currentYear;
    
    /** Create an array to hold 6 lines of 7 days. */
    this.displayDays = new Array(MAX_DAYS_IN_MONTH_DISPLAY);

    /** Draw the calendar SVG shape. */
    this.drawShape();
    
    /** Populate the calendar with month, year, and days. */
    this.updateCalendar();
    
}


/**
 * Draw the calendar component SVG shape.
 * <p>
 * Creates all of the SVG Text elements within a parent SVG element. There are two (2)
 * elements for the month and year header, and forty-two (42) <code>MAX_DAYS_IN_MONTH_DISPLAY</code>
 * elements for the days array of six (6) rows or weeks, and seven (7) cloumns or days.
 *
 * @return an empty string.
 */
LCARSCalendar.prototype.drawShape = function() {
    
    var header_offset = this.font_size * 2;
    
    this.monthText = new LCARSText("", this.displayMonthString, 0, 0, ES_LABEL_C | EC_L_BLUE);
    this.monthText.setTextFontSize(this.font_size);
    this.element.appendChild(this.monthText.element);
    
    this.yearText = new LCARSText("", this.displayYearString, 6 * this.font_size * this.daySpacing, 0, ES_LABEL_E | EC_L_BLUE);
    this.yearText.setTextFontSize(this.font_size);
    this.element.appendChild(this.yearText.element);
    
    
    for(i=0; i<MAX_DAYS_IN_MONTH_DISPLAY; i++) {
        
        y_offset = parseInt(i/7) * this.font_size * 2;
        x_offset = i%7 * this.font_size * this.daySpacing;
        
        this.displayDays[i] = new LCARSText("day_" + i.toString(), i.toString(), x_offset, i+y_offset+header_offset, this.properties);
        this.displayDays[i].setTextFontSize(this.font_size);
        
        if(parseInt(i/7) == 1) {
            this.displayDays[i].textElement.setAttribute("x", 0);
        }
        
        this.element.appendChild(this.displayDays[i].element);
    }
    
    return "";
}


/**
 * This method updates the displayed calendar.
 * <p>
 * It retrieves the appropriate string literals, and formats the standard seven (7) day,
 * four (4) to six (6) week month array based on the starting day of the week for the
 * particular month. The weeks start on Sundays and end on Saturdays. The days are color
 * coded as follows:
 * <ul>
 * <li> Sunday    orange          <code>[EC_ORANGE]</code>
 * <li> Weekday   light blue      <code>[EC_L_BLUE]</code>
 * <li> Saturday  blue            <code>[EC_BLUE]</code>
 * <li> Today     yellow          <code>[EC_YELLOW]</code>
 * </ul>
 */
LCARSCalendar.prototype.updateCalendar = function() {
    
    /** 
     * Get the strings for the display month and the display year for the calendar header.
     */
    this.displayMonthString = MONTHS[this.displayMonth+1];
    this.displayYearString = this.displayYear.toString();
    
    /** 
     * Set the month and year text for the calendar header.
     */
    this.monthText.setText(this.displayMonthString);
    this.yearText.setText(this.displayYearString);
    
    /**
     * Get the starting day of week for the month.
     */
    startDay = this.dayOfWeek(this.displayMonth, 1, this.displayYear);
    
    /**
     * Get the number of the days in the display month.
     */
    daysInMonth = this.getDaysInMonth(this.displayMonth, this.displayYear);
    
    
    /**
     * Clear the calendar of text, and fill it with the appropriate days
     * for the display month and the display year.
     */
    for(i=0; i<MAX_DAYS_IN_MONTH_DISPLAY; i++) {
        if(i < startDay || i > startDay+daysInMonth-1) {
            this.displayDays[i].setText("");
        }
        else {
            day = i-startDay+1;
            this.displayDays[i].setText(day);
            
            var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);
            
            if(this.isWeekday(day)) {
                this.displayDays[i].textElement.setAttribute("fill", LCARS.getColor(EC_L_BLUE));
            }
            if(this.isSunday(parseInt(day))) {
                this.displayDays[i].textElement.setAttribute("fill", LCARS.getColor(EC_ORANGE));
            }
            if(this.isSaturday(day)) {
                this.displayDays[i].textElement.setAttribute("fill", LCARS.getColor(EC_BLUE));
            }
            
            if(this.isToday(day)) {
                this.displayDays[i].textElement.setAttribute("fill", LCARS.getColor(EC_YELLOW));
            }
        }
    }
}


/**
 * This method is runonce a second to detect the day roll-over. So, the calendar can
 * be automatically updated. When the roll-over is detected, the new day is set as "today",
 * and the display is updated.
 */
LCARSCalendar.prototype.update = function() {
    
    /** Get the current date. */
    var rightNow = new Date();

    /**
     * Compare the current date (year, month, and day of month) to the date stored by
     * the <code>setToday()</code> method. If they are not the same, set the new today,
     * and update the displayed calendar.
     */
    if(!(rightNow.getYear() == this.now.getYear()) ||
       !(rightNow.getMonth() == this.now.getMonth()) ||
       !(rightNow.getDate() == this.now.getDate())) {
        //alert("now: " + this.now.getYear() + ", " + this.now.getMonth() + ", " + this.now.getDate() +
        //      "  right now: " + rightNow.getYear() + ", " + rightNow.getMonth() + ", " + rightNow.getDate());
        this.setToday();
        this.displayMonth = this.currentMonth;
        this.displayYear = this.currentYear;
        this.updateCalendar();
    }
}


/**
 * Function to start the auto update of the calendar. It retrieves a reference 
 * to the calendar object, and passes it to an interval timer. The update interval
 * is fixed to one second.
 */
LCARSCalendar.prototype.startAutoUpdate = function() {
    thisObj = this; // Can't just pass "this" to the setInterval function.
    
    thisObj.intervalVariable = setInterval( (function(thisObj) { return function() { thisObj.update(); } })(this), 1000); // Update is fixed to one second.
}

/**
 * Function to stop the auto update of the calendar. It test the interval variable, 
 * and if it is not null, it clears it.
 */
LCARSCalendar.prototype.stopAutoUpdate = function() {
    if(!(this.intervalVariable == null)) {
        clearInterval(this.intervalVariable);
    }
}


/**
 * Function to clear the calendar day SVG elements of text.
 * <p>
 * A convenience function for clearing the day elements of text. The SVG text of each
 * element is set to an empty string. Not really necessary, since the method that updates
 * the calendar array of days resets the text of the entire array.
 */
LCARSCalendar.prototype.clearCalendarText = function() {
    for(i=0; i<MAX_DAYS_IN_MONTH_DISPLAY; i++) {
        this.displayDays[i].setText("");
    }
}


/** Function to set the spacing between the day elements of the calendar.
 *
 * @param spaceMultiplier multiplies the font size to produce a space between the day elements
 */
LCARSCalendar.prototype.setDaySpacing = function(spaceMultiplier) {
    this.daySpacing = spaceMultiplier;
}



/**
 * Set the calendar object's date to today's date.
 */
LCARSCalendar.prototype.setToday = function() {
    /** Get the current date and time. */
    this.now = new Date();

    /** Set the object's <code>today</code> attribute to the current date. */
    this.today = now.getDate();

    /** Set the object's current month and year from the current date/time.
     Add 1900 to the current year to get a valid four digit year. Note: javascript
     counts years from 1900 (a Y2K thing). */
    this.currentMonth = now.getMonth();
    this.currentYear  = now.getYear();
    this.currentYear += 1900;
}


/**
 * Returns <code>true</code> if the year is a four (4) digit year.
 *
 * @param year the year as a number
 */
LCARSCalendar.prototype.isFourDigitYear = function(year) {
    
    /** First, check to make sure the argument is a number. If not, return <code>false</code>. */
    if(isNaN(year)) {
        return false;
    }
    /** If it is a number, check the length. If length is 4, return <code>true</code>,
     else <code>false</code>. */
    else if(year.toString().length == 4) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * Decrement the year for the displayed calendar month.
 */
LCARSCalendar.prototype.decrementYear = function() {
    var year  = this.displayYear - 1;
    if (this.isFourDigitYear(year)) {
        this.displayYear = year;
        this.updateCalendar();
    }
}


/**
 * Decrement the month for the displayed calendar.
 */
LCARSCalendar.prototype.decrementMonth = function() {
    var month  = this.displayMonth - 1;
    if (month < 0) {
        month = 11;
    }
    this.displayMonth = month;
    this.updateCalendar();
}


/**
 * Increment the year for the displayed calendar month.
 */
LCARSCalendar.prototype.incrementYear = function() {
    var year  = this.displayYear + 1;
    if (this.isFourDigitYear(year)) {
        this.displayYear = year;
        this.updateCalendar();
    }
    else {
        alert("displayYear + 1: " + this.displayYear + "  is not a 4 digit year.");
    }
}


/**
 * Increment the month for the displayed calendar.
 */
LCARSCalendar.prototype.incrementMonth = function() {
    var month  = this.displayMonth + 1;
    if (month > 11) {
        month = 0;
    }
    this.displayMonth = month;
    this.updateCalendar();
}


/**
 * Returns true if the argument specified four digit year is a leap year.
 *
 * @param year the four digit year
 * @return  true if the given year is a leap year, false, if not
 */
LCARSCalendar.prototype.isLeapYear = function(year) {
    /**
     * If the current year is evenly divisible by 4 and not by 100, return true.
     */
    if((year % 4 == 0) && (year % 100 != 0)) {
        return true;
    }

    /**
     * If the current year is evenly divisible by 400, return true.
     */
    if(year % 400 == 0) {
        return true;
    }

    /**
     * If none of the leap year conditions is met, method falls through,
     * and returns false.
     */
    return false;
}


/**
 * Returns the day of the week according to the Gregorian calendar, given
 * the <code>month</code>, <code>day</code>, and <code>year</code>.
 * January through December equal 0 - 11, and Sunday through Saturday equal
 * 0 - 6.
 * @param month  the month of the date
 * @param day  the day of the date
 * @param year  the year of the date
 * @return  the day of the week according to the Gregorian calendar
 */
LCARSCalendar.prototype.dayOfWeek = function(month, day, year) {
    
    var date = new Date(year, month, day);
    
    return date.getDay();
}


/**
 * Returns <code>true</code> if the day of the week integer argument is greater
 * than Sunday (0) and less than Saturday (6).
 * <ul>
 * <li>Sunday = 0</li>
 * <li>Monday = 1</li>
 * <li>Tuesday = 2</li>
 * <li>Wednesday = 3</li>
 * <li>Thursday = 4</li>
 * <li>Friday = 5</li>
 * <li>Saturday = 6</li>
 * </ul>
 *
 * @param day an integer between 1 and 5 inclusive to return <code>true</code>, else <code>false</code>
 * @return <code>true</code> if weekday (Mon - Fri), <code>false</code> if not
 */
LCARSCalendar.prototype.isWeekday = function(day) {
    var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);

    if(_day > 0 && _day < 6) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * Returns <code>true</code> if the <code>day</code> argument indicates a Sunday, an integer 0.
 *
 * @param day an integer value for the day
 * @return <code>true</code> if Sunday, <code>false</code> if not
 */
LCARSCalendar.prototype.isSunday = function(day) {
    
    var date = new Date(this.displayYear, this.displayMonth, day);
    
    var _day = date.getDay();
    
    if(_day == 0) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * Returns <code>true</code> if the <code>day</code> argument indicates a Saturday, an integer 6.
 *
 * @param day an integer value for the day
 * @return <code>true</code> if Saturday, <code>false</code> if not
 */
LCARSCalendar.prototype.isSaturday = function(day) {
    var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);

    if(_day == 6) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * Returns <code>true</code> if the <code>day</code> argument indicates the current day.
 *
 * @param day an integer value for the day
 * @return <code>true</code> if today, <code>false</code> if not
 */
LCARSCalendar.prototype.isToday = function(day) {
    if(this.displayYear == this.currentYear && this.displayMonth == this.currentMonth && day == this.today) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * Returns the number of days in the argument specified month and year.
 *
 * @param month  the integer (0 - 11) identifier of the month
 * @param year  the four digit year
 */
LCARSCalendar.prototype.getDaysInMonth = function(month, year) {
    var days = 31;

    if(month == 3 || month == 5 || month == 8 || month == 10) {
        days = 30;
    }
    else if(month == 1 ) {
        if(this.isLeapYear(year)) {
            days = 29;
        }
        else {
            days = 28;
        }
    }
    return days;
}

