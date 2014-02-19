LCARSScreen = function(name, title, width, height, vb_x, vb_y, vb_width, vb_height) {
    this.name = name;
    this.title = title;
    this.subtitle = "";
    this.width = width;
    this.height = height;
    this.vb_x = vb_x;
    this.vb_y = vb_y;
    this.vb_width = vb_width;
    this.vb_height = vb_height;
    
    this.htmlString = this.getElementString();
}

LCARSScreen.prototype.getElementString = function() {
    var htmlString = "<svg";
    
    htmlString +=  " width='" + this.width;
    htmlString += "' height='" + this.height;
    htmlString += "' viewbox='" + this.vb_x + " " + this.vb_y + " " + this.vb_width + " " + this.vb_height;    
    htmlString += "'>";
    
    return htmlString;
}

LCARSScreen.prototype.getHTML = function() {
    return this.htmlString;
}

LCARSScreen.prototype.addComponent = function(component) {
    this.htmlString += component.getHTML();
}
