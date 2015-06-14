LCARSScreen = function(id, title, width, height) {
    this.id = id;
    this.title = title;
    this.subtitle = "";
    this.width = width;
    this.height = height;
    
    this.element = document.createElementNS(svgNS, "svg");
    
    this.element.setAttribute("id", this.id);
    this.element.setAttribute("width", this.width);
    this.element.setAttribute("height", this.height);

    LCARS.setFont(LCARS_FONT);

    this.textElement = new LCARSText("screen", this.title, (this.width-10), FONT_TITLE_SIZE, EF_TITLE | EC_ORANGE | ES_LABEL_E);
    this.addComponent(this.textElement);
    document.body.style.MozUserSelect='none';
    document.body.style.WebkitUserSelect='none';
    
    this.divElement = document.createElement("div");
    this.divElement.id = 'screen_div' + this.id;
    this.divElement.style.position = "absolute";
    this.divElement.style.width = this.width + "px";
    this.divElement.style.height = this.height + "px";
    this.divElement.style.top = "5px";
    this.divElement.style.left = "5px";
    this.divElement.style.border = "1px solid black";
    
    this.divElement.appendChild(this.element);
}


LCARSScreen.prototype.setViewBox = function(vb_x, vb_y, vb_width, vb_height) {
    this.vb_x = vb_x;
    this.vb_y = vb_y;
    this.vb_width = vb_width;
    this.vb_height = vb_height;
    
    this.element.setAttribute("viewBox", this.vb_x + " " + this.vb_y + " " + this.vb_width + " " + this.vb_height);
}


LCARSScreen.prototype.setTransform = function(transform) {
    this.divElement.style.webkitTransform =  transform;
}



LCARSScreen.prototype.addComponent = function(component) {
    if(component.composite == true) {
        this.divElement.appendChild(component.divElement);
    }
    else {
        this.element.appendChild(component.element);
    }
}
