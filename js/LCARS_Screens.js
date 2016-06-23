LCARSScreen = function(id, title, width, height, properties) {
    if(id != undefined) { /** Prevent execution when used for inheritence and not instantiation. */
        this.id = id;
        this.title = title;
        this.subtitle = "";
        this.width = width;
        this.height = height;
        this.properties = properties;
        
        if(this.properties == undefined) {
            this.properties = EF_TITLE | EC_ORANGE | ES_LABEL_E;
        }
        
        this.fontSize = LCARS.getLCARSFontSize(this.properties);
        
        document.body.style.MozUserSelect='none';
        document.body.style.WebkitUserSelect='none';
    }
    
//    this.divElement = document.createElement("div");
//    this.divElement.id = 'screen_div' + this.id;
//    this.divElement.style.position = "absolute";
//    this.divElement.style.width = this.width + "px";
//    this.divElement.style.height = this.height + "px";
//    this.divElement.style.top = "5px";
//    this.divElement.style.left = "5px";
//    this.divElement.style.border = "1px solid black";
    
    //this.divElement.appendChild(this.element);
}


LCARSScreen.prototype.drawScreen = function() {
    
    this.element = document.createElementNS(svgNS, "svg");
    
    this.element.setAttribute("id", this.id);
    this.element.setAttribute("width", this.width);
    this.element.setAttribute("height", this.height);
    
}


LCARSScreen.prototype.drawHeader = function() {
    
    this.CAP_WIDTH = this.fontSize * 0.6;
    this.headerThickness = this.fontSize*0.9;
    
    this.titleElement = new LCARSText("screen_title", this.title, this.width - (this.CAP_WIDTH + this.RIGHT + LCARS_SPACE), this.fontSize-2, this.properties);
    this.addComponent(this.titleElement);
    
    console.log("Title BBox Width: " + this.titleElement.textElement.getComputedTextLength());
    
    var textWidth = LCARS.getTextWidth(this.title, Math.round(this.titleElement.fontSize*0.54) + "pt " + LCARS.getFont()) - (1.5*this.title.length);
    console.log("text width = " + textWidth);
    
    /**
     * Create the title bar with end caps.
     */
    this.hb_end_cap_w = new LCARSRectangle("hb_end_cap_w", "",
                                           this.LEFT,
                                           this.TOP,
                                           this.CAP_WIDTH,
                                           this.headerThickness,
                                           ES_RECT_RND_W | this.properties);
    this.addComponent(this.hb_end_cap_w);
    
    this.rect_title_bar = new LCARSRectangle("rect_title_bar", "",
                                             this.LEFT + this.CAP_WIDTH + LCARS_SPACE,
                                             this.TOP,
                                             this.width - (2 * LCARS_SPACE) - (2 * this.CAP_WIDTH) - this.LEFT - this.RIGHT - textWidth,
                                             this.headerThickness,
                                             this.properties);
    this.addComponent(this.rect_title_bar);
    
    this.hb_end_cap_e = new LCARSRectangle("hb_end_cap_e", "",
                                           this.width - (this.CAP_WIDTH + this.RIGHT),
                                           this.TOP,
                                           this.CAP_WIDTH,
                                           this.headerThickness,
                                           ES_RECT_RND_E | this.properties);
    this.addComponent(this.hb_end_cap_e);
}


LCARSScreen.prototype.drawFooter = function() {
    
    this.CAP_WIDTH = this.fontSize * 0.6;
    this.footerThickness = this.fontSize*0.9;
    
    /**
     * Create the title bar with end caps.
     */
    this.fb_end_cap_w = new LCARSRectangle("fb_end_cap_w", "",
                                           this.LEFT,
                                           this.height - this.footerThickness - this.BOTTOM,
                                           this.CAP_WIDTH,
                                           this.footerThickness,
                                           ES_RECT_RND_W | this.properties);
    this.addComponent(this.fb_end_cap_w);
    
    this.rect_footr_bar = new LCARSRectangle("rect_footr_bar", "",
                                             this.LEFT + this.CAP_WIDTH + LCARS_SPACE,
                                             this.height - this.footerThickness - this.BOTTOM,
                                             this.width - (2 * LCARS_SPACE) - (2 * this.CAP_WIDTH) - this.LEFT - this.RIGHT,
                                             this.footerThickness,
                                             this.properties);
    this.addComponent(this.rect_footr_bar);
    
    this.fb_end_cap_e = new LCARSRectangle("fb_end_cap_e", "",
                                           this.width - (this.CAP_WIDTH + this.RIGHT),
                                           this.height - this.footerThickness - this.BOTTOM,
                                           this.CAP_WIDTH,
                                           this.footerThickness,
                                           ES_RECT_RND_E | this.properties);
    this.addComponent(this.fb_end_cap_e);
}


LCARSScreen.prototype.setViewBox = function(vb_x, vb_y, vb_width, vb_height) {
    this.vb_x = vb_x;
    this.vb_y = vb_y;
    this.vb_width = vb_width;
    this.vb_height = vb_height;
    
    this.element.setAttribute("width", '100%');
    this.element.setAttribute("height", '100%');
    
    this.element.setAttribute("viewBox", this.vb_x + " " + this.vb_y + " " + this.vb_width + " " + this.vb_height);
}


LCARSScreen.prototype.setTransform = function(transform) {
    this.element.style.webkitTransform =  transform;
}



LCARSScreen.prototype.addComponent = function(component) {
//    if(component.composite == true) {
//        this.divElement.appendChild(component.divElement);
//    }
//    else {
        this.element.appendChild(component.element);
//    }
}



/**
 * Blank Screen - No header or footer
 */
LCARSBlankScreen.prototype = new LCARSScreen();
function LCARSBlankScreen(id, title, width, height, properties) {
    LCARSScreen.call(this, id, title, width, height, properties);
    
    this.LEFT = 10;
    this.TOP = 5;
    this.RIGHT  = 10;
    this.BOTTOM = 15;
    
    
    this.drawScreen();
    
}


/**
 * Basic Screen - Includes a header, including the screen title, and a footer.
 */
LCARSBasicScreen.prototype = new LCARSScreen();
function LCARSBasicScreen(id, title, width, height, properties) {
    LCARSScreen.call(this, id, title, width, height, properties);
    
    this.LEFT = 10;
    this.TOP = 5;
    this.RIGHT  = 10;
    this.BOTTOM = 15;
    
    
    this.drawScreen();
    
    this.drawHeader();
    
    this.drawFooter();
}
