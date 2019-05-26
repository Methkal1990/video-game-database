window.onload=function () { setInterval(moveSliderElements,3000); };

var divElements = document.querySelectorAll("#slider div");
var quantityOfShownElements=4;
var contSlider=0;
var sliderNextElementPosition=4;//((divElements.length)/(divElements.length/quantityOfShownElements))

function moveSliderElements() {
    var i;
    divElements = document.querySelectorAll("#slider div");

    if (contSlider<((divElements.length)-quantityOfShownElements)){
        divElements[contSlider].style.display="none";
        divElements[sliderNextElementPosition].style.display="inline-block";
        contSlider++;
        sliderNextElementPosition++;
    } else{
        for (i=0;i<divElements.length;i++){
            divElements[i].style.display="none";
        }
        for (i=0;i<quantityOfShownElements;i++){
            divElements[i].style.display="inline-block";
        }
        contSlider=0;
        sliderNextElementPosition=4;
    }
}

function showSliderElementsButton(value) {
        for (i=0;i<divElements.length;i++){
            divElements[i].style.display="none";
        }
        for (i=(quantityOfShownElements*value);(i<((quantityOfShownElements*value)+quantityOfShownElements));i++){
            divElements[i].style.display="inline-block";
        }
        contSlider=(quantityOfShownElements*value);
        sliderNextElementPosition=((quantityOfShownElements*value)+quantityOfShownElements);
}