var macAddress = "00:06:66:7D:83:DF"; //BLuetooth Mate mac adress, pasword 1234
var forwardButton, backwardButton, leftButton, rightButton;


function onLoad() {
    /*Buttons*/
    forwardButton = document.getElementById("forwardButton");
    backwardButton = document.getElementById("backwardButton");
    leftButton = document.getElementById("leftButton");
    rightButton = document.getElementById("rightButton");
    
    document.addEventListener("deviceready", onDeviceReady, false);
    
    /*These eventlisteners are triggered on touchstart*/
    forwardButton.addEventListener("touchstart",drive,false);
    backwardButton.addEventListener("touchstart",reverse,false);
    rightButton.addEventListener("touchstart",turnRight,false);
    leftButton.addEventListener("touchstart",turnLeft,false);
    
    /*These eventlisteners are triggered on touchend*/
    forwardButton.addEventListener("touchend",stop,false);
    backwardButton.addEventListener("touchend",stop,false);
    leftButton.addEventListener("touchend",stop,false);
    rightButton.addEventListener("touchend",stop,false);
    
    
}

function onDeviceReady(){
    bluetoothSerial.connect(macAddress, onConnect, onDisconnect);
}

function onConnect() {
    alert("Successfully connected to: " + macAddress + "!");
}

function onDisconnect() {
    alert("Disconnected");
}

function sendToArduino(data) {
    bluetoothSerial.write(data);
}

function drive() {
    sendToArduino("f");
    forwardButton.innerHTML="fw";
}


function reverse() {
    sendToArduino("b");
}

function turnRight() {
    sendToArduino("r");
}

function turnLeft(){
    sendToArduino("l");
}

function stop(){
    sendToArduino("s");
    forwardButton.innerHTML="f";
}