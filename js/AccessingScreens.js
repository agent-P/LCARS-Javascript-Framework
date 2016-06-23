var showAccessingScreen = function(portraitDivElement, landscapeDivElement) {
    
    /**
     * Create the Screen containers.
     */
    portraitDivElement = document.createElement("div");
    
    portraitDivElement.id = "_portraitDiv";
    portraitDivElement.style.position = "absolute";
    portraitDivElement.style.width = "705px";
    portraitDivElement.style.height = "1000px";
    portraitDivElement.style.top = "5px";
    portraitDivElement.style.left = "5px";
    portraitDivElement.style.webkitTransform =  'scale(0.45) translateX(-440px) translateY(-575px)';
    
    document.body.appendChild(portraitDivElement);
    
    landscapeDivElement = document.createElement("div");
    
    landscapeDivElement.id = "_landscapeDiv";
    landscapeDivElement.style.position = "absolute";
    landscapeDivElement.style.width = "1700px";
    landscapeDivElement.style.height = "1000px";
    landscapeDivElement.style.top = "5px";
    landscapeDivElement.style.left = "5px";
    landscapeDivElement.style.webkitTransform = 'scale(0.33) translateX(-1730px) translateY(-1020px)';
    
    document.body.appendChild(landscapeDivElement);
    
    LCARS.setFont("LCARS");
    
    portraitScreen = new LCARSBasicScreen('_portrait', hostname, 705, 1015);
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        portraitDivElement.appendChild(portraitScreen.element);
        landscapeScreen = new LCARSBasicScreen('_landscape', hostname, 1700, 950);
        landscapeDivElement.appendChild(landscapeScreen.element);
        updateOrientation();
    }
    else {
        landscapeScreen = new LCARSBasicScreen('_landscape', hostname, 1840, 1080);
        landscapeScreen.setViewBox(0, 0, 1840, 1080);
        document.body.appendChild(landscapeScreen.element);
    }
    
    
    /**
     * Portrait Screen
     */
    
    text_message = new LCARSText("text_message", "ACCESSING", 100, 350 , EF_TITLE | EC_L_BLUE);
    text_message.setTextFontSize(110);
    portraitScreen.addComponent(text_message);
    
    text_message_sub_1 = new LCARSText("text_message_sub_1", "DEVICE ID: AUTHENTICATING...", 300, 500 , EF_SUBTITLE | EC_L_BLUE);
    portraitScreen.addComponent(text_message_sub_1);
    
    text_message_sub_2 = new LCARSText("text_message_sub_2", "SYSTEM ID: " + hostname, 300, 550 , EF_SUBTITLE | EC_L_BLUE);
    portraitScreen.addComponent(text_message_sub_2);
    
    
    
    /**
     * Landscape Screen
     */
    
    l_text_message = new LCARSText("l_text_message", "ACCESSING", 250, 200 , EF_TITLE | EC_L_BLUE);
    l_text_message.setTextFontSize(90);
    landscapeScreen.addComponent(l_text_message);
    
    l_text_message_sub_1 = new LCARSText("l_text_message_sub_1", "DEVICE ID: AUTHENTICATING...", 375, 300 , EF_SUBTITLE | EC_L_BLUE);
    landscapeScreen.addComponent(l_text_message_sub_1);
    
    l_text_message_sub_2 = new LCARSText("l_text_message_sub_2", "SYSTEM ID: " + hostname, 375, 350 , EF_SUBTITLE | EC_L_BLUE);
    landscapeScreen.addComponent(l_text_message_sub_2);
    
    
}

var removeAccessingScreen = function() {
    
    var element_p = document.getElementById("_portraitDiv");
    element_p.parentElement.removeChild(element_p);
    var element_l = document.getElementById("_landscapeDiv");
    element_l.parentElement.removeChild(element_l);
    document.body.removeChild(landscapeScreen.element);

}
