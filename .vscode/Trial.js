function changeColour(element){
    var currentColour = element.style.background;
    if(currentColour == "red"){
        element.style.backgroundColor ="green";
    }else{
        element.style.backgroundColor ="red";
    }
}