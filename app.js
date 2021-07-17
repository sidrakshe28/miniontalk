var btnTranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

//console.log(txtInput);
var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTrnaslateURL(text){
    return serverURL +" ?" + "text=" +text;
}


function errorHandler(error){
    console.log("error occured",error);
}


function clickeventhandler(){
    var inputText=txtInput.value;

    //calling server for processing
    fetch(getTrnaslateURL(inputText))
    .then(response =>response.json())
    .then(json=>console.log(json.contents.translated))
    .catch(errorHandler)

    fetch(getTrnaslateURL(text))


    //outputDiv.innerText="aass"+txtInput.value;


}

btnTranslate.addEventListener("click", clickeventhandler)