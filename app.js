var btnTranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

//console.log(txtInput);


function clickeventhandler(){
    
    outputDiv.innerText="aass"+txtInput.value;


}

btnTranslate.addEventListener("click", clickeventhandler)