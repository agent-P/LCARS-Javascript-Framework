LCARSScreen = function(id, title, width, height, vb_x, vb_y, vb_width, vb_height) {
    this.id = id;
    this.title = title;
    this.subtitle = "";
    this.width = width;
    this.height = height;
    this.vb_x = vb_x;
    this.vb_y = vb_y;
    this.vb_width = vb_width;
    this.vb_height = vb_height;
    
    this.element = document.createElementNS(svgNS, "svg");
    
    this.element.setAttribute("id", this.id);
    this.element.setAttribute("width", this.width);
    this.element.setAttribute("height", this.height);
    this.element.setAttribute("viewBox", this.vb_x + " " + this.vb_y + " " + this.vb_width + " " + this.vb_height);

    this.textElement = new LCARSText("screen", this.title, (this.vb_width-10), FONT_TITLE_SIZE, EF_TITLE | EC_ORANGE | ES_LABEL_E);
    this.addComponent(this.textElement);
    document.body.style.MozUserSelect='none';
    
}

LCARSScreen.prototype.addComponent = function(component) {
    this.element.appendChild(component.element);
}
