var btnTranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslateURL(text){
    return serverURL + "?" + "text=" + text
}



function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong happend")
}


function clickHandler(){
    var inputText=txtInput.value;

    //calling server for processing
    fetch(getTranslateURL(inputText))

        .then(response => response.json())
        .then(json => {
            var translateText=json.contents.translated;
             outputDiv.innerHTML=translateText;

    })
    .catch(errorHandler)



};

btnTranslate.addEventListener("click", clickHandler)