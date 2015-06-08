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

    document.body.style.MozUserSelect='none';
    document.body.style.WebkitUserSelect='none';
    
    this.divElement = document.createElement("div");
    this.divElement.style.position = "absolute";
    this.divElement.style.width = this.width + "px";
    this.divElement.style.height = this.height + "px";
    this.divElement.style.top = "5px";
    this.divElement.style.left = "5px";
    
    this.divElement.style.webkitTransform =  'scale(1.35) translateX(100px) translateY(150px)';
    
    this.divElement.appendChild(this.element);

}

LCARSScreen.prototype.addComponent = function(component) {
    if(component.composite == true) {
        this.divElement.appendChild(component.divElement);
    }
    else {
        this.element.appendChild(component.element);
    }
}

