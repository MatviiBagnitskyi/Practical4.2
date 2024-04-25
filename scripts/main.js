let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/firefox-icon.png'){
        myImage.setAttribute ('src', 'image/google-chrome.png');
    }
    else{
        myImage.setAttribute ('src', 'image/firefox-icon.png');
    }
}